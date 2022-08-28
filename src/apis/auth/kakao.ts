import { DbConnection } from '../../modules/connect'
import KAKAO from '../../configs/kakao'
import axios from 'axios'
import { paramsErrorHandler } from '../../modules/paramsError'

const { KAKAO_REDIRECT_URI, KAKAO_REST_API_KEY } = KAKAO
const getKakaoAccessToken = async (
    params: { authorizationCode: string },
    connection: DbConnection
) => {
    try {
        const { authorizationCode } = params
        //accessToken 발급
        const tokenResponse = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${authorizationCode}`,
            {
                headers: {
                    'Content-type':
                        'application/x-www-form-urlencoded;charset=utf-8',
                },
            }
        )
        const accessToken = tokenResponse.data.access_token
        //사용자 정보 가져오기
        const userInfoResponse = await axios.get(
            'https://kapi.kakao.com/v2/user/me',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-type':
                        'application/x-www-form-urlencoded;charset=utf-8',
                },
            }
        )

        return {
            status: 201,
            data: {
                success: userInfoResponse.data,
            },
        }
    } catch (e: any) {
        paramsErrorHandler(e)
    }
}

export default {
    getKakaoAccessToken,
}
