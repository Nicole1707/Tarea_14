# Pruebas de Integración Automatizadas con k6 – Fake Store API

Este proyecto contiene un conjunto de pruebas de integración automatizadas utilizando la herramienta **k6** sobre la [Fake Store API](https://fakestoreapi.com/), específicamente en el módulo de productos.

---

## Objetivo

Simular escenarios de integración para validar el correcto funcionamiento de los endpoints relacionados con productos. Estas pruebas automatizadas buscan comprobar que las operaciones básicas (listar, crear, consultar y actualizar productos) se ejecutan de manera esperada, incluso bajo carga moderada.

---

## Tecnologías Utilizadas

- [k6](https://k6.io/) – Herramienta de pruebas de carga e integración.
- JavaScript – Lenguaje usado para los scripts de prueba.
- Fake Store API – API de prueba gratuita que simula una tienda online.

---

## Estructura del Proyecto

```bash
.
├── test.js       # Script principal de pruebas k6
├── k6.exe        # Ejecutable de k6 (para Windows)
└── README.md     # Este archivo
