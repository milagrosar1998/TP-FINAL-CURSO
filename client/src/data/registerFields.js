export const registerFields = [
    {
        label: "Nombre",
        inputId: "nombre",
        type: "text",
        placeholder: "Ingresá tu nombre",
        name: "nombre",
        required: true,
        minLength: 2,
        maxLength: 40,
        pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ ]+",
        title: "El nombre solo puede contener letras y espacios.",

    },

    {
        label: "Apellido",
        inputId: "apellido",
        type: "text",
        placeholder: "Ingresá tu apellido",
        name: "apellido",
        required: true,
        minLength: 2,
        maxLength: 40,
        pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ ]+",
        title: "El apellido solo puede contener letras y espacios.",
    },


    {
        label: "Email",
        inputId: "email",
        type: "email",
        placeholder: "Ingresá tu email",
        name: "email",
        required: true,

    },

    {
        label: "Teléfono",
        inputId: "telefono",
        type: "tel",
        placeholder: "Ingresá tu teléfono",
        name: "telefono",
        required: true,
        minLength: 10,
        maxLength: 15,
        pattern: "[0-9]+",
        title: "Ingresá solamente números",
    },

    {
        label: "Dirección",
        inputId: "direccion",
        type: "text",
        placeholder: "Ingresá tu dirección",
        name: "direccion",
        required: true,
        minLength: 3,
        maxLength: 100,
    },
    {
        label: "Ciudad",
        inputId: "ciudad",
        type: "text",
        placeholder: "Ingresá tu ciudad",
        name: "ciudad",
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    {
        label: "Provincia",
        inputId: "provincia",
        type: "text",
        placeholder: "Ingresá tu provincia",
        name: "provincia",
        required: true,
        minLength: 5,
        maxLength: 50,
    },



    {
        label: "Contraseña",
        inputId: "password",
        type: "password",
        placeholder: "Creá una contraseña",
        name: "password",
        required: true,
        minLength: 6,
        maxLength: 30,
        title: "La contraseña debe tener al menos 6 caracteres.",
    },
]