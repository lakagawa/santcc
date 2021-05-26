const mongoose = require('../../database');
const bcrypt = require('bcryptjs')

const DadoClinicoSchema = new mongoose.Schema({
  sinan: {
    type: String
  },
  tipoNotificacao: { //revisar esse
    type: String,
    enum: ['SELECIONE', 'DENGUE', 'CHIKUNGUYA'],
    default: 'SELECIONE',
  },
  dataNotificacao: {
    type: Date
  },
  dataPrimeirosSintomas: {
    type: Date
  },
  dataInvestigacao: {
    type: Date,
  },
  gestante: {
    type: String
  },
  sinArtralgiaIntensa: {
    type: Boolean,
    default: false
  },
  sinArtrite: {
    type: Boolean,
    default: false
  },
  sinCalafrios: {
    type: Boolean,
    default: false
  },
  sinCefaleia: {
    type: Boolean,
    default: false
  },
  sinConjuntivite: {
    type: Boolean,
    default: false
  },
  sinDiarreia: {
    type: Boolean,
    default: false
  },
  sinDorAbdominal: {
    type: Boolean,
    default: false
  },
  sinDorCostas: {
    type: Boolean,
    default: false
  },
  sinDorRetroOcular: {
    type: Boolean,
    default: false
  },
  sinDorRetroOrbital: {
    type: Boolean,
    default: false
  },
  sinExantema: {
    type: Boolean,
    default: false
  },
  sinExtremidadesFrias: {
    type: Boolean,
    default: false
  },
  sinFebre: {
    type: Boolean,
    default: false
  },
  sinLeucopenia: {
    type: Boolean,
    default: false
  },
  sinMialgia: {
    type: Boolean,
    default: false
  },
  sinNauseas: {
    type: Boolean,
    default: false
  },
  sinPetequeias: {
    type: Boolean,
    default: false
  },
  sinProstracao: {
    type: Boolean,
    default: false
  },
  sinProvaLacoPositivo: {
    type: Boolean,
    default: false
  },
  sinVomito: {
    type: Boolean,
    default: false
  },
  dataInicioSintomasAlarme: {
    type: Date
  },
  sinAlarmeAcumuloLiquido: {
    type: Boolean,
    default: false
  },
  sinAlarmeAumentoProgressivoHematocrito: {
    type: Boolean,
    default: false
  },
  sinAlarmeDorAbdominalIntensaContinua: {
    type: Boolean,
    default: false
  },
  sinAlarmeHepatomegalia: {
    type: Boolean,
    default: false
  },
  sinAlarmeHipotensaoPosturalLipotimia: {
    type: Boolean,
    default: false
  },
  sinAlarmeLetargiaIrritabilidade: {
    type: Boolean,
    default: false
  },
  sinAlarmeQuedaAbruptaPlaquetas: {
    type: Boolean,
    default: false
  },
  sinAlarmeSangramentoMucosaOutrasHemorragias: {
    type: Boolean,
    default: false
  },
  sinAlarmeVomitosPersistentes: {
    type: Boolean,
    default: false
  },
  dataInicioSintomasDengueGrave: {
    type: Date
  },
  sinDengueGraveAcumoLiquidoInsufiRespiratoria: {
    type: Boolean,
    default: false
  },
  sinDengueGraveAlteracaoConsciencia: {
    type: Boolean,
    default: false
  },
  sinDengueGraveASTALT: {
    type: Boolean,
    default: false
  },
  sinDengueGraveExtremidadesFrias: {
    type: Boolean,
    default: false
  },
  sinDengueGraveHematemese: {
    type: Boolean,
    default: false
  },
  sinDengueGraveHipotensaoArterialFaseTardia: {
    type: Boolean,
    default: false
  },
  sinDengueGraveMelena: {
    type: Boolean,
    default: false
  },
  sinDengueGraveMetrorragiaVolumosa: {
    type: Boolean,
    default: false
  },
  sinDengueGraveMiocardite: {
    type: Boolean,
    default: false
  },
  sinDengueGravePAConvergente: {
    type: Boolean,
    default: false
  },
  sinDengueGravePulsoDebilIndetectavel: {
    type: Boolean,
    default: false
  },
  sinDengueGraveSangramentoSNC: {
    type: Boolean,
    default: false
  },
  sinDengueGraveTaquicardia: {
    type: Boolean,
    default: false
  },
  sinDengueGraveTempoEnchimentoCapilar: {
    type: Boolean,
    default: false
  },

  doencaPreDiabetes: {
    type: Boolean,
    default: false
  },
  doencaPreDoencaAcidoPeptica: {
    type: Boolean,
    default: false
  },
  doencaPreDoencaRenalCronica: {
    type: Boolean,
    default: false
  },
  doencaPreDoencasAutoImunes: {
    type: Boolean,
    default: false
  },
  doencaPreDoencasHematologicas: {
    type: Boolean,
    default: false
  },
  doencaPreHepatopatias: {
    type: Boolean,
    default: false
  },
  doencaPreHipertensaoArterial: {
    type: Boolean,
    default: false
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente'
  }
})


const DadoClinico = mongoose.model('DadoClinico', DadoClinicoSchema);

module.exports = DadoClinico