import * as actionTypes from '../actionTypes.js'
import axios from 'axios'
var API_KEY = require('../../../../config.js')

export default (question_id) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions/${question_id}/answers`
  const options = {
    headers: {'Authorization': API_KEY.TOKEN}
  }
  return axios.get(url, options)
}