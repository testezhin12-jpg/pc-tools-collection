export interface DataItem {
    id: number;
    value: any;
}

export class DataHandler {
    private items: DataItem[] = [];

    constructor(initialData: DataItem[] = []) {
        this.items = initialData;
    }

    addItem(item: DataItem): void {
        this.items.push(item);
    }

    removeItem(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getItem(id: number): DataItem | undefined {
        return this.items.find(item => item.id === id);
    }

    getAllItems(): DataItem[] {
        return this.items;
    }

    clearItems(): void {
        this.items = [];
    }
}
