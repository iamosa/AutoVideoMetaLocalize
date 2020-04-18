import {BASE_PATH, ApiAccountLoginGetRequest, ApiAccountLogoutGetRequest} from '../generated-sources/openapi';

export class AuthenticationNavigator {
  static login(params: ApiAccountLoginGetRequest): void {
    const returnUrl: string = params.returnUrl || window.location.pathname;

    window.location.assign(encodeURI(
        `${BASE_PATH}/api/account/login?returnUrl=${returnUrl}`,
    ));
  }

  static logout(params: ApiAccountLogoutGetRequest): void {
    const returnUrl: string = params.returnUrl || window.location.pathname;

    window.location.assign(encodeURI(
        `${BASE_PATH}/api/account/logout?returnUrl=${returnUrl}`,
    ));
  }
}
