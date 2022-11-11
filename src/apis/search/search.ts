import { DbConnection } from './../../modules/connect'
import { paramsErrorHandler } from './../../modules/paramsError'
import { changeDbTimeForm } from './../../modules/changeTimeForm'

const contentsSearch = async (params: any, connection: DbConnection) => {
    let { type, search } = params //query params
    let response: any[] = []
    // params 띄어쓰기 제거
    search = search.replace(/ /g, '') // g-> slash 안에 모든 문자 변경
    try {
        // DB 값 띄어쓰기 제거
        if (type === 'title') {
            response = await connection.run(
                `SELECT idx,nickname,title,content,file,hit,created_at FROM community WHERE replace(title," ","") LIKE ? ORDER BY hit DESC`,
                ['%' + search + '%']
            )
        } else if (type === 'content') {
            response = await connection.run(
                `SELECT idx,nickname,title,content,file,hit,created_at FROM community WHERE replace(content," ","") LIKE ? ORDER BY hit DESC`,
                ['%' + search + '%']
            )
        } else if (type === 'writer') {
            response = await connection.run(
                `SELECT idx,nickname,title,content,file,hit,created_at FROM community WHERE replace(nickname," ","") LIKE ? ORDER BY hit DESC`,
                ['%' + search + '%']
            )
        } else if (type === 'titleAndContent') {
            response = await connection.run(
                `SELECT idx,nickname,title,content,file,hit,created_at FROM community WHERE replace(content," ","") LIKE ? OR replace(title," ","") LIKE ? ORDER BY hit DESC`,
                ['%' + search + '%', '%' + search + '%']
            )
        }
        changeDbTimeForm(response)
        return {
            status: 200,
            data: {
                searchResult: response,
            },
        }
    } catch (e: any) {
        paramsErrorHandler(e)
    }
}

export default {
    contentsSearch,
}
