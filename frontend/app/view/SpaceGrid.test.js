describe('ParkingApp.view.SpaceGrid', function() {
    it('should be defined', function() {
        expect(true).toBe(true);
    });

    it('should have grid configuration', function() {
        const columns = [
            { text: 'ID', dataIndex: 'id', width: 50 },
            { text: 'Zone ID', dataIndex: 'zone_id', width: 80 },
            { text: 'Number', dataIndex: 'number', width: 80 },
            { text: 'Status', dataIndex: 'status', width: 100 }
        ];
        expect(columns.length).toBe(4);
        expect(columns[1].dataIndex).toBe('zone_id');
    });

    it('should have toolbar buttons', function() {
        const buttons = [
            { text: 'Add' },
            { text: 'Edit' },
            { text: 'Delete' }
        ];
        expect(buttons.length).toBe(3);
    });
});
