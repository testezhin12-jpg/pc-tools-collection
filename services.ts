import { someUtilityFunction } from './utils';

export interface ServiceData {
    id: number;
    name: string;
    active: boolean;
}

const services: ServiceData[] = [
    { id: 1, name: 'Service A', active: true },
    { id: 2, name: 'Service B', active: false },
    { id: 3, name: 'Service C', active: true },
    { id: 4, name: 'Service D', active: false },
];

export function getActiveServices(): ServiceData[] {
    return services.filter(service => service.active);
}

export function getServiceById(id: number): ServiceData | undefined {
    return services.find(service => service.id === id);
}

export function toggleServiceStatus(id: number): void {
    const service = getServiceById(id);
    if (service) {
        service.active = !service.active;
    }
}

export function optimizeServiceLookup(ids: number[]): ServiceData[] {
    const serviceMap = new Map<number, ServiceData>(services.map(service => [service.id, service]));
    return ids.map(id => serviceMap.get(id)).filter((service): service is ServiceData => Boolean(service));
}
