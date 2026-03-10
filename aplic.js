const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("usuarios.db");

// Criar tabela
db.run(`
CREATE TABLE IF NOT EXISTS usuarios(
id INTEGER PRIMARY KEY AUTOINCREMENT,
cpf TEXT,
nome TEXT,
dataNascimento TEXT,
email TEXT
)
`);

// LISTAR
app.get("/usuarios", (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) return res.json(err);
        res.json(rows);
    });
});

// ADICIONAR
app.post("/usuarios", (req, res) => {
    const { cpf, nome, dataNascimento, email } = req.body;

    db.run(
        "INSERT INTO usuarios (cpf,nome,dataNascimento,email) VALUES (?,?,?,?)",
        [cpf, nome, dataNascimento, email],
        function (err) {
            if (err) return res.json(err);
            res.json({ id: this.lastID });
        }
    );
});

// ALTERAR
app.put("/usuarios/:id", (req, res) => {
    const { cpf, nome, dataNascimento, email } = req.body;
    const id = req.params.id;

    db.run(
        "UPDATE usuarios SET cpf=?, nome=?, dataNascimento=?, email=? WHERE id=?",
        [cpf, nome, dataNascimento, email, id],
        (err) => {
            if (err) return res.json(err);
            res.json({ message: "Usuário atualizado" });
        }
    );
});

// EXCLUIR
app.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM usuarios WHERE id=?", id, (err) => {
        if (err) return res.json(err);
        res.json({ message: "Usuário excluído" });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});