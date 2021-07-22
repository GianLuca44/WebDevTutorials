import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { Table } from 'reactstrap'
import QuestionnaireTableElement from './QuestionnaireTableElement'

/**
 * Die Tabelle der Questionnaires und die dazugehörigen 
 * Controls (Show, Edit, Delete).
 * 
 * @param {array} qs Die Liste der Questionnaires
 * @param {function} update Die Funktion zum Updaten
 * @param {function} _delete Die Funktion zum Löschen
 */
const QuestionnaireTable = ({ _delete }) => {

    const qs = useSelector(state => state.qs, _.isEqual)

    return <Table hover>
        <tbody>
        { 
            _.map(qs, questionnaire => 
                <QuestionnaireTableElement 
                    key={ questionnaire.id } 
                    questionnaire={ questionnaire }
                    _delete={ _delete } />
            ) 
        }
        </tbody>
    </Table>
}

export default QuestionnaireTable