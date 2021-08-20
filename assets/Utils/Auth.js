class Auth {
  static saveSession (session) {
    localStorage.setItem('trip', JSON.stringify(session))
  }

  static getSession () {
    return JSON.parse(localStorage.getItem('trip'))
  }

  static deleteSession () {
    localStorage.removeItem('trip')
  }
}

export {
  Auth
}
