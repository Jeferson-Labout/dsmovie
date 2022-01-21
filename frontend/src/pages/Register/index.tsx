function Register(){

    return(

<form>
  <div className="form-control">
    <label htmlFor="formGroupExampleInput">Informe o titulo do Filme</label>
    <input type="text" className="form-control" id="formGroupExampleInput"/>
  </div>
  <div className="form-control">
    <label htmlFor="formGroupExampleInput2">Informe a URL da Imagem</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" />
  </div>
  <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
</form>

    );
}

export default Register;