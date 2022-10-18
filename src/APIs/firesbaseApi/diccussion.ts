/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable arrow-body-style */
import { fireStore } from '@config/firebase';
import { DICCUSION_MODEL, diccussionCollection, projectCollection, replyCommentCollection, replyDiccussionCollection } from '@constants';
import IParamsCreatPost from '@type/Firebase/Post';

/**
 *
 * @param {*} param0
 */
export const getDiccussionByProject = (projectId: string) => {
  try {
    return fireStore.collection(projectCollection)
      .doc(projectId.toString())
      .collection(diccussionCollection)
      .orderBy(DICCUSION_MODEL.CREATED_AT, 'desc')
      .get()
      .then(snapshot =>
        snapshot.docs.map(data => {
          return {
            id: data.id,
            ...data.data(),
          }
        })
      )
      .catch(err => err)
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {*} param0
 */

export const createDiccussion = async (inforCreatPost: IParamsCreatPost, projectId: string) => {
  try {
    const params = {
      ...inforCreatPost,
      created_at: Date.now(),
    }
    return fireStore.collection(`${projectCollection}/${projectId}/${diccussionCollection}`)
      .add(params)
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} param0
 */
export const replyDiccussion = async (inforCreatPost: IParamsCreatPost, projectId: string, diccussionId: string) => {
  try {
    const params = {
      ...inforCreatPost,
      created_at: Date.now(),
    }
    return fireStore.collection(`${projectCollection}/${projectId}/${diccussionCollection}/${diccussionId}/${replyDiccussionCollection}`).add(params)
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} param0
 */
export const replyCommentByComment = async (inforCreatPost: IParamsCreatPost, projectId: string, diccussionId: string, commentId: string) => {
  try {
    const params = {
      ...inforCreatPost,
      created_at: Date.now(),
    }
    return fireStore.collection(`${projectCollection}/${projectId}/${diccussionCollection}/${diccussionId}/${replyDiccussionCollection}/${commentId}/${replyCommentCollection}`).add(params)
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {*} param0
 */
export const getCommentByDiccussion = (projectId: string, diccussionId: string) => {
  try {
    return fireStore.collection(projectCollection)
      .doc(projectId.toString())
      .collection(diccussionCollection)
      .doc(diccussionId.toString())
      .collection(replyDiccussionCollection)
      .orderBy(DICCUSION_MODEL.CREATED_AT, 'desc')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(data => {
          return {
            id: data.id,
            ...data.data(),
          }
        })
      })
      .catch(err => err)
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {*} param0
 */
export const getReplyCommentByComment = (projectId: string, diccussionId: string, commentId: string) => {
  try {
    return fireStore.collection(projectCollection)
      .doc(projectId.toString())
      .collection(diccussionCollection)
      .doc(diccussionId.toString())
      .collection(replyDiccussionCollection)
      .doc(commentId.toString())
      .collection(replyCommentCollection)
      .orderBy(DICCUSION_MODEL.CREATED_AT, 'desc')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(data => {
          return {
            id: data.id,
            ...data.data(),
          }
        })
      })
      .catch(err => err)
  } catch (error) {
    console.log(error);
  }
}