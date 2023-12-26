const Input = ({label, type='text', state, setState}) => {
    return(
        <div>
          <label  className="sr-only mt-2">{label}</label>
          <input
              value={state}
              onChange={e=>setState(e.target.value)}
              type={type}
              className="form-control"
              placeholder={label} required=""
          />
        </div>
    )
}
export default Input