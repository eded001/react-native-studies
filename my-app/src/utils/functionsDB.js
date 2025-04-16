import * as SQLite from 'expo-sqlite';

function createTable() {
    try {
        const db = SQLite.openDatabaseSync("./db/my-db.db");

        const result = db.getAllSync(`
            SELECT name FROM sqlite_master
            WHERE type='table' AND name='schedules';
        `);

        if (result.length > 0) {
            console.log("Tabela 'schedules' já existe. Nenhuma ação foi tomada.");
        } else {
            db.execSync(`
                CREATE TABLE schedules (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    procedure TEXT NOT NULL,
                    hour TEXT NOT NULL,
                    value INTEGER NOT NULL
                )
            `);

            console.log("Tabela 'schedules' foi criada com sucesso!");
        }

        return db;
    } catch (error) {
        console.error("Erro ao verificar/criar tabela: ", error);
    }
}

function createSchedule(procedure, hour, value) {
    try {
        const db = createTable();

        db.runSync(
            "INSERT INTO schedules (procedure, hour, value) VALUES (?, ?, ?)",
            [procedure, hour, value]
        );

        console.log("Tarefa criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar tarefa: ", error);
    }
}

function deleteSchedule(id) {
    try {
        const db = createTable();

        db.runSync("DELETE FROM schedules WHERE id = ?", [id]);
    } catch (error) {
        console.error("Erro ao deletar agendamento:", error);
    }
}

function editSchedule(id, procedure, hour, value) {
    try {
        const db = createTable();

        db.execSync(
            "UPDATE schedules SET procedure = ?, hour = ?, value = ? WHERE id = ?",
            [procedure, hour, value, id]
        );
    } catch (error) {
        console.error("Erro ao atualizar agendamento: ", error);
    }
}

function getSchedules() {
    try {
        const db = createTable();

        const results = db.getAllSync("SELECT * FROM schedules");

        return results;
    } catch (error) {
        console.error("Erro ao selecionar os itens da tabela: ", error);
    }
}

function dropTable() {
    try {
        const db = createTable();

        db.execSync("DROP TABLE IF EXISTS schedules");

        console.log("Tabela 'schedules' foi removida com sucesso.");
    } catch (error) {
        console.error("Erro ao remover a tabela 'schedules':", error);
    }
}

export { createTable, createSchedule, editSchedule, getSchedules, deleteSchedule, dropTable };