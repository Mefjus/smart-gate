import { Injectable } from '@nestjs/common';
import ms from 'ms';

import constants from '../../../utils/constants';
import { Config } from '../../config/config';

@Injectable()
export class InvitationsConfigService {
  constructor(private readonly config: Config) {}

  getExpirationDate(): Date {
    const expirationDateString = this.config.invitation.expirationDate;
    return new Date(Date.now() + ms(expirationDateString));
  }

  getBaseMagicLinkUrl() {
    const baseUrl = this.config.clientUrl.split(';')[0];
    return `${baseUrl}${constants.clientEndpoints.registrationMagicLink}`;
  }
}
