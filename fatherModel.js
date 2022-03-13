const mongoose = require('mongoose')

const Logs = new mongoose.Schema(
    {
        //padre:{
            nombre:"",
            endpoint: "",
            fecha: "",
            ram:[{
                total: 0,
                libre: 0,
                uso: 0,
                porcentajeuso: 0
            }],
            cpupadre:[{
                pid: "",
                name: "",
                state: "",
                children: [{
                    pid: "",
                    name: ""
                }]
            }]

        //}
    },{
        collection : 'Logs'
    }
);

const LogsR = new mongoose.model('Logs',Logs);
module.exports = {LogsR};