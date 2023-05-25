import axios from 'axios';

export class HttpService {
  constructor(baseUrl = process.env.BASE_URL, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  getFullApiUrl(url) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem('token')
    };
  }

  extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }) {
    return configWithoutDataAndUrl;
  }

  get(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
