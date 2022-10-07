const Role = require('../models/role')
const User = require('../models/user')
const Guest = require('../models/guest')


const esRoleValido = async(rol='')=>{
    const existeRol = await Role.findOne({rol})
    if(!existeRol) throw new Error(`El rol ${rol} no está registrado`)
}

const emailExiste = async(email='')=>{
    const existeEmail = await User.findOne({email})
    if(existeEmail) throw new Error(`El correo ${email} ya existe `)
}

const existeUserByID = async(id)=>{
    const existeUser = await User.findById(id)
    if(!existeUser) throw new Error(`El id usuario ${id} no existe `)
}

const existeGuestByID = async(id)=>{
    const existeGuest = await Guest.findById(id)
    if(!existeGuest) throw new Error(`El id de invitado ${id} no existe `)
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUserByID,
    existeGuestByID
}