import React from 'react'
import _ from 'lodash'
import { Button } from 'reactstrap'
import QuestionnaireShowDialog from './QuestionnaireShowDialog'
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog'

/**
 * Eine Zeile in der Tabelle.
 * 
 * @param {object} questionnaire Der Questionnaire, der angezeigt werden soll
 * @param {function} update Die Funktion zum Updaten
 * @param {function} _delete Die Funktion zum Löschen 
 */
const QuestionnaireTableElement = ({ questionnaire, _delete }) => (
    <tr key={ questionnaire.id } >
        <td>{ questionnaire.id }</td>
        <td>{ questionnaire.title }</td>
        <td>{ questionnaire.description }</td>
        <td><QuestionnaireShowDialog questionnaire={ questionnaire } /></td>
        <td><QuestionnaireUpdateDialog questionnaire={ questionnaire } /></td>
        <td><Button color='danger' 
                    onClick={ _.partial(_delete, questionnaire.id) } 
                    className='float-right' >Delete</Button>
        </td>
    </tr>
)

export default QuestionnaireTableElement