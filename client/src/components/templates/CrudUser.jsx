export default function CrudUser() {
  return (
    <main>
      <section>
        <h1>Mi cuenta</h1>

        <p>
          Desde acá podrás consultar tus compras,
          presupuestos y datos personales.
        </p>
      </section>

      <section>
        <h2>Mis datos</h2>

        <p>Nombre: Usuario</p>
        <p>Email: usuario@email.com</p>

        <button>Editar mis datos</button>
      </section>

      <section>
        <h2>Mis compras</h2>

        <p>
          Todavía no tenés compras realizadas.
        </p>
      </section>

      <section>
        <h2>Mis presupuestos</h2>

        <p>
          Todavía no tenés presupuestos solicitados.
        </p>
      </section>
    </main>
  );
}