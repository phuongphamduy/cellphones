var app = angular.module("myapp", ["ngRoute"]);
app.controller("ctrlSlider", function ($scope) {
    $scope.images = [
        {
            class: "active",
            image: "galaxyFold.png"
        },
        {
            class: "",
            image: "iphone14.png"
        },
        {
            class: "",
            image: "tvxiaomi.png"
        }

    ];
});
app.controller("ctrlDienThoai", function ($scope, $rootScope) {
    $scope.firstSlide = [
        {
            id: 0,
            discount: 14,
            image: "iphone14.png",
            name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
            newPrice: 30069000,
            oldPrice: 34990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 1,
            discount: 8,
            image: "reno.png",
            name: "OPPO Reno8",
            newPrice: 8290000,
            oldPrice: 8990000,
            thuocTinh: {
                manHinh: "6.4 inches",
                CNManHinh: "AMOLED",
                cameraSau: "Camera chính: 64MP, f/1.7 " +
                "Camera Marco: 2MP, f/3.3" +
                "Bokeh: 2MP, f/2.4",
                cameraTruoc: "32MP, f/2.4",
                chipSet: "Qualcomm Snapdragon 680",
                boNhoTrong: "256 GB",
                sim: "2 SIM (Nano-SIM)",

            },
            class: "none show-sm"
        },
        {
            id: 2,
            discount: 19,
            image: "iphone13.png",
            name: "iPhone 14 128GB | Chính hãng VN/A",
            newPrice: 20190000,
            oldPrice: 24990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 3,
            discount: 7,
            image: "vivo.png",
            name: "Vivo T1X",
            newPrice: 4190000,
            oldPrice: 4990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ]
    $scope.secondSlide = [
        {
            id: 4,
            discount: 16,
            image: "samsunggalaxy.png",
            name: "Samsung Galaxy Z Fold4",
            newPrice: 34290000,
            oldPrice: 40990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 5,
            discount: 28,
            image: "iphone11.png",
            name: "iPhone11 64GB | Chính hãng VN/A",
            newPrice: 10750000,
            oldPrice: 14990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-sm"
        },
        {
            id: 6,
            discount: 35,
            image: "samsungpink.png",
            name: "Samsung Galaxy S22 (8GB - 128GB)",
            newPrice: 14350000,
            oldPrice: 21990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 7,
            discount: 16,
            image: "iphone13promax.png",
            name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
            newPrice: 30690000,
            oldPrice: 34990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ]
    $scope.thirdSlide = [
        {
            id: 8,
            discount: 12,
            image: "iphone13.png",
            name: "iPhone13 128GB | Chính hãng VN/A",
            newPrice: 18290000,
            oldPrice: 24990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 9,
            discount: 8,
            image: "reno.png",
            name: "OPPO Reno8",
            newPrice: 8290000,
            oldPrice: 8990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-sm"
        },
        {
            id: 10,
            discount: 11,
            image: "iphone14.png",
            name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
            newPrice: 30690000,
            oldPrice: 34990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 11,
            discount: 28,
            image: "iphone11.png",
            name: "iPhone11 64GB | Chính hãng VN/A",
            newPrice: 10750000,
            oldPrice: 14990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ]
    if (typeof $rootScope.cartArray == 'undefined') {
        $rootScope.cartArray = [];
    }
    $rootScope.quantity = $rootScope.cartArray.length;

})
app.controller("ctrlLaptop", function ($scope, $rootScope) {
    $scope.firstSlide = [
        {
            id: 12,
            discount: 17,
            image: "applem1.png",
            name: "Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam",
            newPrice: 43990000,
            oldPrice: 52990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 13,
            discount: 21,
            image: "asus.png",
            name: "Laptop Asus Gaming Ros Strix G15 G513IH HNO15W",
            newPrice: 188900000,
            oldPrice: 23990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-sm"
        },
        {
            id: 14,
            discount: 12,
            image: "lenovo1.png",
            name: "Laptop Lenovo Ideapad 3 14ITL6",
            newPrice: 15490000,
            oldPrice: 17690000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 15,
            discount: 42,
            image: "laptopgigabyte1.png",
            name: "Laptop Gigabyte U4 UD-50VN823SQ",
            newPrice: 14690000,
            oldPrice: 25490000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ]
    $scope.secondSlide = [
        {
            id: 16,
            discount: 34,
            image: "msimodern.png",
            name: "Laptop MSI Modern 14 B11MOU 1030VN",
            newPrice: 9900000,
            oldPrice: 14990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 17,
            discount: 18,
            image: "assunitro5.png",
            name: "Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV",
            newPrice: 21690000,
            oldPrice: 26490000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-sm"
        },
        {
            id: 18,
            discount: 31,
            image: "msibarvo.png",
            name: "Laptop Gaming MSI Bravo 15 B5DD 276VN",
            newPrice: 15490000,
            oldPrice: 22490000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 19,
            discount: 14,
            image: "asusvivobook.png",
            name: "Laptop Asus Vivobook OLED 15X A1503ZA-L1151W",
            newPrice: 14690000,
            oldPrice: 16990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ]
    $scope.thirdSlide = [
        {
            id: 20,
            discount: 14,
            image: "asus2.png",
            name: "Laptop ASUS Flip BR1100FKA-BP1135W",
            newPrice: 5690000,
            oldPrice: 6990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: ""
        },
        {
            id: 21,
            discount: 31,
            image: "msibarvo.png",
            name: "Laptop Gaming MSI Bravo 15 B5DD 276VN",
            newPrice: 15490000,
            oldPrice: 22490000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-sm"
        },
        {
            id: 22,
            discount: 34,
            image: "msimodern.png",
            name: "Laptop MSI Modern 14 B11MOU 1030VN",
            newPrice: 9900000,
            oldPrice: 14990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-md"
        },
        {
            id: 23,
            discount: 21,
            image: "asus.png",
            name: "Laptop Asus Gaming Ros Strix G15 G513IH HNO15W",
            newPrice: 188900000,
            oldPrice: 23990000,
            thuocTinh: {
                manHinh: "6.7 inches",
                CNManHinh: "Super Retina XDR OLED",
                cameraSau: "Camera chính: 48 MP, f/1.8, 24mm, OIS " +
                "Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚" +
                "Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR",
                cameraTruoc: "Camera selfie: 12 MP, f/1.9, 23mm, PDAF",
                chipSet: "Apple A16 Bionic 6 nhân",
                boNhoTrong: "128 GB",
                sim: "2 SIM (nano\‑SIM và eSIM)",

            },
            class: "none show-lg"
        }

    ];
})
app.controller("ctrlPhuKien1", function ($scope) {
    $scope.phuKien = [
        {
            title: "Nổi bật",
            image: "cate-1644.png"
        },
        {
            title: "Apple Care",
            image: "apple.png"
        },
        {
            title: "Balo, túi chống sốc",
            image: "balo.png"
        },
        {
            title: "Camera an ninh",
            image: "camera.png"
        },
        {
            title: "Camera hành trình",
            image: "camerahanhtrinh.png"
        },
        {
            title: "Cáp, sạc",
            image: "capsac.png"
        },
        {
            title: "Chuột, bàn phím",
            image: "chuot.png"
        },
        {
            title: "Dán màn hình",
            image: "danmanhinh.png"
        },
        {
            title: "Dây đeo đồng hồ",
            image: "daydeodongho.png"
        },
        {
            title: "Gaming gear",
            image: "gaminggear.png"
        },
    ]
});
app.controller("ctrlPhuKien3", function ($scope) {
    $scope.phuKien = [
        {
            title: "Nổi bật",
            image: "cate-1644.png",
            class: "pl-3"
        },
        {
            title: "Apple Care",
            image: "apple.png"
        },
        {
            title: "Balo, túi chống sốc",
            image: "balo.png"
        },
        {
            title: "Camera an ninh",
            image: "camera.png"
        },
        {
            title: "Camera hành trình",
            image: "camerahanhtrinh.png"
        },
        {
            title: "Cáp, sạc",
            image: "capsac.png",
            class: "pr-3"
        }
    ]
});
app.controller("ctrlPhuKien2", function ($scope) {
    $scope.phuKien = [
        {
            title: "Ổ cứng di động",
            image: "ocung.png"
        },
        {
            title: "Ốp lưng-bao da",
            image: "oplung.png"
        },
        {
            title: "Phụ kiện Apple",
            image: "phukienapple.png"
        },
        {
            title: "Phụ kiện Laptop",
            image: "phukienlaptop.png"
        },
        {
            title: "Pin dự phòng",
            image: "pinduphong.png"
        },
        {
            title: "Quạt Mini",
            image: "quatmini.png"
        },
        {
            title: "Sim 4g đẹp",
            image: "sim.png"
        },
        {
            title: "Tay cầm chống rung",
            image: "taycam.png"
        },
        {
            title: "Thẻ nhớ, USB",
            image: "thenho.png"
        },
        {
            title: "Thiết bị mạng",
            image: "thietbimang.png"
        },
    ]
})
app.controller("ctrlPhuKien4", function ($scope) {
    $scope.phuKien = [
        {
            title: "Ổ cứng di động",
            image: "ocung.png",
            class: "pl-3"
        },
        {
            title: "Ốp lưng-bao da",
            image: "oplung.png"
        },
        {
            title: "Phụ kiện Apple",
            image: "phukienapple.png"
        },
        {
            title: "Phụ kiện Laptop",
            image: "phukienlaptop.png"
        },
        {
            title: "Pin dự phòng",
            image: "pinduphong.png"
        },
        {
            title: "Quạt Mini",
            image: "quatmini.png",
            class: "pr-3"
        }
    ]
})
app.controller("ctrlLinhKien", function ($scope) {
    $scope.linhKien = [
        {
            image: "case.png",
            title: "Case máy tính",
            class: ""
        },
        {
            image: "cpu.png",
            title: "CPU",
            class: ""
        },
        {
            image: "lapsan.png",
            title: "PC lắp sẵn",
            class: ""
        },
        {
            image: "mainboard.png",
            title: "Mainboard",
            class: ""
        },
        {
            image: "psu.png",
            title: "Nguồn máy tính",
            class: ""
        },
        {
            image: "ram.png",
            title: "RAM",
            class: ""
        },
        {
            image: "ssd.png",
            title: "Ổ cứng",
            class: "none show-md"
        },
        {
            image: "tannhat.png",
            title: "Tản nhiệt",
            class: "none show-md"
        },
        {
            image: "vga.png",
            title: "VGA",
            class: "none show-md"
        }

    ]
})
app.controller("ctrlHangCu", function ($scope) {
    $scope.hangCu = [
        {
            image: "dongho.png",
            title: "Đồng hồ thông minh",
            class: ""
        },
        {
            image: "ipad.png",
            title: "Máy tính bảng cũ",
            class: ""
        },
        {
            image: "iphone.png",
            title: "Điện thoại cũ",
            class: ""
        },
        {
            image: "lap.png",
            title: "Laptop cũ",
            class: ""
        },
        {
            image: "loa.png",
            title: "Loa, tai nghe",
            class: ""
        },
        {
            image: "mac.png",
            title: "Mac cũ",
            class: ""
        },
        {
            image: "mahinh.png",
            title: "Màn hình cũ",
            class: "none show-md"
        },
        {
            image: "nha.png",
            title: "Nhà thông minh cũ",
            class: "none show-md"
        },
        {
            image: "phukien.png",
            title: "Phụ kiện cũ",
            class: "none show-md"
        }
    ]
})
app.config(function ($routeProvider) {
    $routeProvider
        .when("/product/:id", {
            templateUrl: "product.html?" + Math.random(),
            controller: "productCtrl"
        })
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/cart", {
            templateUrl: "cart.html",
            controller: "cartCtrl"
        })
        .otherwise("/home", {
            redirectTo: "home.html"
        })
})
app.controller("productCtrl", function ($scope, $rootScope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.sanpham = $rootScope.sanphamArray[$scope.id];
    $scope.increaseQuantity = function () {
        var tempArray = $rootScope.cartArray.filter(function (value, index, array) {
            return value.id == $scope.id;
        });
        if (tempArray.length == 0) {
            $rootScope.quantity++;
            $scope.sanpham.quantity = 1;
            $rootScope.cartArray.push($scope.sanpham);
        }
    }
})
app.controller("cartCtrl", function ($scope, $rootScope, $routeParams) {
    $scope.sumMoney = 0;
    function runSumMoney() {
        $scope.sumMoney = $rootScope.cartArray.reduce(function (total, value, index, array) {
            return total + (value.quantity * value.newPrice);
        }, 0);
    }
    runSumMoney();

    $scope.increaseQuantity = function (index) {
        $rootScope.cartArray[index].quantity = $rootScope.cartArray[index].quantity + 1;
        runSumMoney();
    }
    $scope.DecreaseQuantity = function (index) {
        if ($rootScope.cartArray[index].quantity > 1) {
            $rootScope.cartArray[index].quantity = $rootScope.cartArray[index].quantity - 1;
            runSumMoney();
        }
    }
    $scope.delete = function (index) {
        $rootScope.cartArray.splice(index, 1);
        runSumMoney();
    }
    
})
app.controller("mainCtrl", function($scope, $rootScope, $http) {
    $rootScope.sanphamArray = [];
    $http.get("product.json").then(function(response) {
        $rootScope.sanphamArray = response.data;
    }, function(response) {
        alert("lỗi");
    });
    $rootScope.search = "";
    $scope.searchSP = function() {
        $rootScope.search = $scope.textSearch;
    }
    $rootScope.limitNumber = 4;
    $rootScope.isMoreProduct = true;
    $scope.xemThem = function() {
        $rootScope.limitNumber = 12;
        $rootScope.isMoreProduct = false;
    }
    $scope.anBot = function() {
        $rootScope.limitNumber = 4;
        $rootScope.isMoreProduct = true;
    }
    $scope.dau = true;
    $scope.orderTangGia = function() {
        $scope.dau = true;
    }
    $scope.orderGiamGia = function() {
        $scope.dau = false
    }
})

    // app.run(function($rootScope) {
    //     $rootScope.$on('$routeChangeStart', function() {
    //         $rootScope.loading = 1;
    //         console.log("hello")
    //     })
    //     $rootScope.$on('$routeChangeSuccess', function() {
    //         $rootScope.loading = 2;
    //         console.log("bye")
    //     });
    //     $rootScope.$on('$routeChangeError', function() {
    //         $rootScope.loading = 3;
    //         alert("lỗi, không tải được template");
    //     })
    // })

    for(var i =0 ; i < prods.length;i++) {
        $scope.sum += prods[i].money;
    }
