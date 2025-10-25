export default {
    api:{
        production:{
            DPTruncate: '', //Поле должно быть, но пусть будет пустым, потом отдельно это тфайл подбрасывать буду
            uploadBufferRegistry: ''
        },
        dev: {
            DPTruncate: 'http://192.168.0.10/dp/registry/truncate',
            uploadBufferRegistry: 'http://192.168.0.10/buffer/registry/upload'
        }
    }
}