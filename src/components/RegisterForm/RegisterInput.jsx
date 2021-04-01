
export default function RegisterInput ({onChange, config, data}) {
    return (
        <div>
        <label className='capitalize' htmlFor={data.field}>
          {config.label}:
          <input
            type={config.type}
            name={data.field}
            value={data.field}
            required={config.required || false}
            onChange={onChange}
          />
        </label>
      </div>
    )
}