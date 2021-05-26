const mongoose = require('../../database');
const bcrypt = require('bcryptjs')

const DadoLaboratorialSchema = new mongoose.Schema({
  dataNs1Coleta: { 
    type: Date
  },
  resultadoNs1: { // revisar 
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  dataSorologiaChikungunya: { 
    type: Date
  },
  resultadoSorologiaChikungunya: {  //revisar
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  dataSorologiaDengue: { 
    type: Date,
  },
  resultadoSorologiaDengue: { 
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  sorotipo: {
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  histopatologia: { 
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  imunohistoquimica: { 
    type: String,
    enum : ['SELECIONE', 'POSITIVO','NEGATIVO', 'INCONCLUSIVO', 'NAOREALIZADO'],
    default: 'SELECIONE',
  },
  dataHospitalizacao: { 
    type: Date
  },
  nomeHospital: { 
    type: String
  },
  telefoneHospital: { 
    type: String
  },
  estadoHospital: { 
    type: String
  },
  cidadeHospital: { 
    type: String
  },
  observacoes: { 
    type: String
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente'
  }
})


const DadoLaboratorial = mongoose.model('DadoLaboratorial', DadoLaboratorialSchema);

module.exports = DadoLaboratorial