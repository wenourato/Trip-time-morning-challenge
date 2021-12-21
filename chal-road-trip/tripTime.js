



// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 
    
]


// tripTime(stops)

const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }
    let totalTime = arr.reduce((acc, curr) => {

        let segmentDistance = curr.speedLimits.reduce((speedAcc, obj) => {
            return speedAcc += obj.distance
        }, 0)

        let avgSpeedLimit = 0
        let segmentTime = 0

        curr.speedLimits.forEach(obj => {
            avgSpeedLimit += Math.round(obj.speedLimit * (obj.distance / segmentDistance))
            let objTime = Math.round((obj.distance * (obj.speedLimit / 60)) /60) + obj.traffic
            segmentTime += objTime
        })
        
        segmentTime = Math.round(segmentTime)
        result.segmentTimes.push(segmentTime)
        acc += segmentTime

        result.avgSpeedLimits.push(avgSpeedLimit)
        return acc
    }, 0)

    result.totalTime = totalTime

    return result
}

tripTime(stops)
