const mongoose = require('../../database');
const bcrypt = require('bcryptjs')

const InformacaoComplementarSchema = new mongoose.Schema({
  viagem: { 
    type: Boolean,
    default: false
  },
  trabalho: { 
    type: Boolean,
    default: false
  },
  estudo: { 
    type: Boolean,
    default: false
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente'
  }
})


const InformacaoComplementar = mongoose.model('InformacaoComplementar', InformacaoComplementarSchema);

module.exports = InformacaoComplementar