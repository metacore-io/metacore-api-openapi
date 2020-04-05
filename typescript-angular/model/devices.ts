/**
 * Metacore IoT Object Storage API
 * Metacore Object Storage - IOT Core Services
 *
 * OpenAPI spec version: 1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DeviceTypesId } from './deviceTypesId';
import { DevicesId } from './devicesId';
import { DevicesInfo } from './devicesInfo';
import { DevicesLocation } from './devicesLocation';
import { OrganizationsId } from './organizationsId';
import { RegionsId } from './regionsId';
import { TenantsId } from './tenantsId';

export interface Devices { 
    id?: DevicesId;
    hardwares?: Array<string>;
    info?: DevicesInfo;
    location?: DevicesLocation;
    name: string;
    organizationId?: OrganizationsId;
    regionId: RegionsId;
    sensors?: Array<string>;
    tenantId: TenantsId;
    typeId: DeviceTypesId;
}