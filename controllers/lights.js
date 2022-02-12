const Light = require('../models/lights');

exports.getManageLights = async (req, res) => {
    let lights = await Light.find({});
    res.status(200).json(lights);
};

exports.getTotalLightTime = async (req, res) => {
    let lights = await Light.find({});
    
    let total = 0;
    let lightData =  {};
    lightData.totalLights = lights.length;

    lights.forEach((light) => {
        total += parseFloat(light.timeDifference);
    });

    lightData.totalTime = total.toFixed(3);

    res.status(200).json(lightData);
};