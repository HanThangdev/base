interface IInforUser {
  name: string,
  image: string
}

export default interface IParamsCreatPost {
  content: string,
  inforUser?: IInforUser
}


// export default interface IParamsGetPost {
// 	id: string;
// }inforUser