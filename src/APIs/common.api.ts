import { BASE_API_URL, END_POINT } from '@constants'
import { http } from '@config'

function checkExistFile({ folderId = 0, params }: any) {
  return http.get(END_POINT.UPLOAD_FILE.CHECK_EXIST_FILE, folderId, { params })
    .then(({ data }) => data)
}

function getS3PresinedUrl({ fileList }: any) {
  return http.post(`${BASE_API_URL}${END_POINT.PRESIGNED}`, fileList)
    .then(({ data }) => data)
}

export {
  checkExistFile,
  getS3PresinedUrl
}
