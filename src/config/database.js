const config = {
  default: {
    username: process.env.DB_USERNAME || 'proyectapiadmin',
    password: process.env.DB_PASSWORD || '123123',
    dialect: process.env.DB_DIALECT || "postgres",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || "127.0.0.1",
  },
  development: {
    extend: "default",
    database: "proyectapi_dev",
  },
  test: {
    extend: "default",
    database: "proyectapi_test",
  },
  production: {
    extend: "default",
    use_env_variable: "DATABASE_URL",
  },
}

Object.keys(config).forEach(configKey => {
  const configValue = config[configKey]
  if (configValue.extend) {
    config[configKey] = Object.assign(
      {},
      config[configValue.extend],
      configValue
    )
  }
})

module.exports = config
