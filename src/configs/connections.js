export default {
    api:{
        production:{
            good: '', //Поле должно быть, но пусть будет пустым, потом отдельно это тфайл подбрасывать буду
            bad: ''
        },
        dev: {
            good: 'http://192.168.0.10/review/good?XDEBUG_SESSION_START=PHPSTORM',
            bad: 'http://192.168.0.10/review/bad?XDEBUG_SESSION_START=PHPSTORM'
        }
    }
}