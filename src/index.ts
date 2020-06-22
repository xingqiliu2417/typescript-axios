import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

const axios = (config: AxiosRequestConfig): void => {
  xhr(config)
}

export default axios
