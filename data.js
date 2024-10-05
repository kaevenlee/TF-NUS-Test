var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-drive",
      "name": "Engineering Drive",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6669152305968424,
        "pitch": 0.020636780457257586,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 1.4285002686638224,
          "pitch": 0.15590284201127425,
          "rotation": 7.0685834705770345,
          "target": "1-engine-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6669152305968424,
          "pitch": 0.020636780457257586,
          "title": "This is where the magic happens",
          "text": "Have fun"
        }
      ]
    },
    {
      "id": "1-engine-auditorium",
      "name": "Engine Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.20589934264047471,
        "pitch": -0.06104908588118718,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.046280886740554195,
          "pitch": 0.10094630119846926,
          "rotation": 12.566370614359176,
          "target": "2-ea-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6082166642788849,
          "pitch": 0.03491179479803996,
          "title": "Engineering Auditorium",
          "text": "This is where the Engineers mug and learn how to weld things together. A common place for all to bond!"
        }
      ]
    },
    {
      "id": "2-ea-atrium",
      "name": "EA Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.5169185365639395,
        "pitch": 0.20295384288326623,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -1.172986505735052,
          "pitch": -0.12864501815265328,
          "title": "Non-Existent Cafe?",
          "text": "A historical landmark, boasting years of coffee enriching experiences that once tantalised the many tastebuds of Engineering students. It has connected everyone across different walks of life, through the loving aroma and passion of the coffee they sell."
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
