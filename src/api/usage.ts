import request from './request'
import useRequest, { Config } from './swr'

// export const updateOrganization = (name: string, data: Partial<Organization>) => {
//   return request.patch(`organization/${name}`, data)
// }

// export const useOrganization = (username?: string, config?: Config<Organization>) =>
//   useRequest<Organization>(
//     {
//       method: 'GET',
//       url: `organization/getorgbyuname/${username}`,
//     },
//     config,
//   )
