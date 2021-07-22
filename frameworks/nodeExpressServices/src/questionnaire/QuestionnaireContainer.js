import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import doFetch from '../network/NetworkUtil'
import Loader from '../app/Loader'

/**
 * Die Questionnaire Funktionalität (Crerate, Tabelle der Questionnaires).
 */
const QuestionnaireContainer = () => {

    const config = useSelector(state => state.config, _.isEqual)
    const loading = useSelector(state => state.loading, _.isEqual)
    const dispatch = useDispatch()

    const readAll = () => {
        dispatch(
            doFetch({
                url: config.url,
                actionType: 'READ_QUESTIONNAIRES',
                errorText: 'Not Found'
            })
        )

        // show todos instead of questionnaires
        // dispatch(
        //     doFetch({
        //         url: 'https://jsonplaceholder.typicode.com/todos',
        //         actionType: 'READ_QUESTIONNAIRES',
        //         errorText: 'Not Found'
        //     })
        // )
    }

    useEffect(readAll, [dispatch, config])

    const _delete = id => {
        dispatch(
            doFetch({
                url: `${ config.url }/${ config.ressource }/${ id }`,
                requestObject: { method: 'DELETE' },
                actionType: 'DELETE_QUESTIONNAIRES',
                errorText: 'Not found, or delete failed.'
            })
        )
        // Ist nötig, wenn wir die REST Schnittstelle nicht verändern wollen.
        // Besser wäre es, wenn wir das gelöschte Questionnaire zurückgeben
        // und dann im NetworkUtil die ID mittels Action an den Reducer mitgeben.
        readAll()
    }

    return <div>
            <QuestionnaireCreateDialog />
            <h3>Questionnaires</h3>
            { loading ? <Loader /> : <QuestionnaireTable _delete={ _delete } /> }
        </div>
}

export default QuestionnaireContainer