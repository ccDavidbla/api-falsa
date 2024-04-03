const express = require('express');
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.primerNombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.companyName();
        this.direccion = {
            calle: faker.address.streetName(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode(),
            pais: faker.address.country()
        };
    }
}

const app = express();
const port = 8000;

// Ruta para generar un nuevo usuario
app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

// Ruta para generar una nueva compañía
app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
});

// Ruta para generar un nuevo usuario y una nueva compañía
app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ user: newUser, company: newCompany });
});


app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));
