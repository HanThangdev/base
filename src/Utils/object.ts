export const parseFilter = (params: any) => {
  if (params?.filter) {
    const { filter, ...restParams } = params
    return { ...restParams, ...filter }
  }
  return params
}