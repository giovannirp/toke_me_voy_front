export function Login() {
  return (
    <section>
      <form>
        <div className="form-control">
          <label htmlFor="login">Login</label>
          <input type="text" id="login" placeholder="Digite seu login" />
        </div>

        <div className="form-control">
          <label htmlFor="senha">Senha</label>
          <input type="text" id="senha" placeholder="Digite sua senha" />
        </div>

        <div className="form-control">
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
} 