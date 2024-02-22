class product {
    constructor(ten, hang, gia, sl, dacdiem) {
        this.Ten = ten;
        this.Hang = hang;
        this.Gia = gia;
        this.SL = sl;
        this.DacDiem = dacdiem;
    }
}

var Products = {
    CPU: {
        INTEL: {
            id1: new product(
                'CPU Intel Core i3-12100F',
                'Intel',
                '2.290.000đ',
                4,
                'CPU Intel Core i3-12100F thiết kế 4 nhân 8 luồng với xung nhịp lên đến 4.3GHz tạo nên khả năng đa nhiệm với tốc độ xử lý vượt bật các trò chơi cao cấp và các ứng dụng đòi hỏi khắt khe nhất.'
            ),
            id2: new product(
                'CPU Intel Core i5-13400F',
                'Intel',
                '5.350.000đ',
                5,
                'CPU Intel Core i5-13400F thiết kế kết hợp Performance-cores và Efficient-cores tạo nên khả năng đa nhiệm với tốc độ xử lý vượt bật các trò chơi cao cấp và các ứng dụng đòi hỏi khắt khe nhất.'
            ),
            id3: new product(
                'CPU Intel Core i7-13700F',
                'Intel',
                '9.790.000đ',
                3,
                'CPU Intel Core i7-13700F thiết kế kết hợp Performance-cores và Efficient-cores tạo nên khả năng đa nhiệm với tốc độ xử lý vượt bật các trò chơi cao cấp và các ứng dụng đòi hỏi khắt khe nhất.'
            ),
            id4: new product(
                'CPU Intel Core i9-14900KF',
                'Intel',
                '13.990.000₫',
                2,
                'CPU Intel Core i9-14900KF thiết kế kết hợp Performance-cores và Efficient-cores tạo nên khả năng đa nhiệm với tốc độ xử lý vượt bật, cho tần số CPU lên đến 6.0GHz để hỗ trợ tốt nhất cho các trò chơi cao cấp và các ứng dụng đòi hỏi khắt khe nhất.'
            )
        },
        AMD: {
            id1: new product(
                'CPU AMD Ryzen 5 7600',
                "AMD",
                '5.490.000₫',
                4,
                'CPU AMD Ryzen 5 7600 nâng cao hiệu suất xử lý với 6 nhân 12 luồng giúp tăng hiệu năng xử lý đa nguồn, giải phóng sức mạnh để tối đa hóa hiệu suất của máy tính.'
            ),
            id2: new product(
                'CPU AMD Ryzen 7 7700',
                'AMD',
                '9.190.000₫',
                5,
                'CPU AMD Ryzen 7 7700 nâng cao hiệu suất xử lý với 8 nhân 16 luồng giúp tăng hiệu năng xử lý đa nguồn, giải phóng sức mạnh để tối đa hóa hiệu suất của máy tính.'
            ),
            id3: new product(
                'CPU AMD Ryzen 9 7900',
                'AMD',
                '11.190.000₫',
                5,
                'CPU AMD Ryzen 9 7900 nâng cao hiệu suất xử lý với 12 nhân 24 luồng giúp tăng hiệu năng xử lý đa nguồn, giải phóng sức mạnh để tối đa hóa hiệu suất của máy tính.'
            )
        }
    },
    VGA: {
        RTX: {
            id1: new product(
                'VGA Gigabyte GeForce RTX 4060',
                'Gigabyte',
                '8.350.000₫',
                5,
                'VGA Gigabyte GeForce RTX 4060 WINDFORCE OC 8G GDDR6 được thiết kế kiến trúc ADA Lovelace mang đến trải nghiệm thế giới ảo siêu rõ nét với sức mạnh công nghệ dò tia được khai phá toàn bộ và mô phỏng hoạt động của ánh sáng như trong thế giới thực.'
            ),
            id2: new product(
                'VGA MSI GeForce RTX 4070',
                'MSI',
                '16.390.000₫',
                8,
                'VGA MSI GeForce RTX 4070 VENTUS 2X WHITE 12G OC mang đến một thiết kế tập trung vào hiệu suất nhằm duy trì các yếu tố cần thiết để xử lý mọi dữ liệu cùng chương trình cần thiết. Việc bố trí quạt kép với một thiết kế cứng cáp cho phép card đồ họa trông sắc nét này phù hợp với mọi bộ PC của bạn.'
            ),
            id3: new product(
                'VGA Asus TUF Gaming GeForce RTX 4090',
                'Asus',
                '65.990.000₫',
                1,
                'TUF Gaming GeForce RTX 4090 OC Edition được thiết kế hoàn toàn mới nhằm cung cấp sức mạnh và khả năng làm mát vượt trội hơn. Phần vỏ bên ngoài hoàn toàn bằng kim loại với ba quạt công nghệ Axial mạnh mẽ sử dụng ổ trục vòng bi kép bền bỉ. Vòng quay của quạt đã được tối ưu để đảm bảo độ ổn định và một chế độ dừng sẽ tạm dừng cả ba quạt ở nhiệt độ thấp. Các bộ tản nhiệt độc lập cho GPU và bộ nhớ sẽ giúp kiểm soát nhiệt độ chặt chẽ.'
            )
        },
        RX: {
            id1: new product(
                'VGA ASRock Radeon RX 7700',
                'ASRock',
                '12.890.000₫',
                1,
                'VGA ASRock Radeon RX 7700 XT Steel Legend 12G OC GDDR6 tận dụng các công nghệ làm mát tiên tiến từ các card đồ họa hàng đầu, thiết kế 3 fan giúp tối ưu hóa khả năng tản nhiệt và là sự lựa chọn hoàn hảo cho cho những hệ thống cân đối giữa hiệu năng và thiết kế.'
            ),
            id2: new product(
                'VGA ASRock Radeon RX 7900',
                'ASRock',
                '31.990.000₫',
                1,
                'Hệ thống làm mát Taichi 3X được chế tạo để đạt được sự cân bằng tốt nhất giữa hiệu suất tản nhiệt và độ im lặng nhờ tất cả các chi tiết được cải tiến. VGA ASRock Radeon RX 7900 XTX Taichi White 24G OC GDDR6 còn được trang bị thêm quạt vòng sọc hoàn toàn mới của ASRock có lượng gió hút vào từ bên nhiều hơn và cung cấp luồng không khí tốt hơn qua dàn làm mát.'
            ),
            id3: new product(
                'VGA ASRock Radeon RX 7800',
                'ASRock',
                '15.990.000₫',
                1,
                'VGA ASRock Radeon RX 7800 XT Steel Legend 16G OC GDDR6 tận dụng các công nghệ làm mát tiên tiến từ các card đồ họa hàng đầu, thiết kế 3 fan giúp tối ưu hóa khả năng tản nhiệt và là sự lựa chọn hoàn hảo cho cho những hệ thống cân đối giữa hiệu năng và thiết kế.'
            ),
            id4: new product(
                'VGA Gigabyte Radeon RX 6600',
                'Gigabyte',
                '5.550.000₫',
                1,
                'VGA Gigabyte Radeon RX 6600 EAGLE mang lại hiệu suất, hiệu quả tiếng ồn thấp và tính thẩm mỹ cao mà các game thủ chuyên nghiệp đã công nhận và tin tưởng. Bạn có thể thưởng thức tất cả các trò chơi yêu thích của mình một cách mạnh mẽ nhưng luôn hoạt động mát mẻ và không gây tiếng ồn.'
            ),
            id5: new product(
                'VGA ASRock Radeon RX 7600',
                'ASRock',
                '8.290.000₫',
                1,
                'VGA ASRock Radeon RX 7600 Steel Legend 8GB OC GDDR6 tận dụng các công nghệ làm mát tiên tiến từ các card đồ họa hàng đầu, thiết kế 3 fan giúp tối ưu hóa khả năng tản nhiệt và là sự lựa chọn hoàn hảo cho cho những hệ thống cân đối giữa hiệu năng và thiết kế.'
            )
        }
    },
    RAM: {
        DDR3: {
            id1: new product(
                'Ram PC G.SKILL Aegis 4GB',
                'G.Skill',
                '260.000₫',
                23,
                'Ram PC G.SKILL Aegis DDR3 mang tốc độ tiêu chuẩn của DDR3-1600MHz, giúp tăng hiệu suất của hệ thống của bạn với CL chỉ 11. Ram PC G.SKILL Aegis DDR3 được trang bị các công nghệ phần cứng tiên tiến để đảm bảo chơi game mượt mà cho các trò chơi mới nhất.'
            ),
            id2: new product(
                'Ram PC G.SKILL Aegis 8GB',
                'G.Skill',
                '415.000₫',
                17,
                'Ram PC G.SKILL Aegis DDR3 mang tốc độ tiêu chuẩn của DDR3-1600MHz, giúp tăng hiệu suất của hệ thống của bạn với CL chỉ 11. Ram PC G.SKILL Aegis DDR3 được trang bị các công nghệ phần cứng tiên tiến để đảm bảo chơi game mượt mà cho các trò chơi mới nhất.'
            )
        },
        DDR4: {
            id1: new product(
                'Ram PC Kingston 4GB',
                'KingSton',
                '420.000₫',
                24,
                'Ram PC Kingston DDR4 4GB Bus 2666MHz 1.2v phá vỡ mọi giới hạn tốc độ của DDR4 khỏi tình trạng bị thắt cổ chai. Cải thiện hiệu suất máy tính, tiết kiệm năng lượng hơn và dung lượng lớn hơn rất nhiều, hỗ trợ tất cả các dòng vi xử lý thế hệ mới nhất.'
            ),
            id2: new product(
                'Ram PC Kingston Fury Beast Black 8GB',
                'KingSton',
                '490.000₫',
                20,
                'Bộ nhớ Ram Kingston Fury DDR4 tự động ép xung với tần số cao nhất được công bố, lên đến 3200 MHz, để cung cấp hiệu năng cao nhất cho các bo mạch chủ có Chipset 100 Series và x99 của Intel. Tăng hiệu suất tối đa cho các vi xử lý 2, 4, 6 và 8-core của Intel giúp nhanh chóng biên tập video, dựng phim 3D, chơi game và xử lý AI. Thiết kế bộ tản nhiệt có độ cao thấp với phong cách độc đáo và mạnh mẽ giúp tương thích với các loại Case có kích thước nhỏ và dáng vẻ mạnh mẽ sẽ làm cho hệ thống của bạn thêm chuyên nghiệp.'
            ),
            id3: new product(
                'Ram PC Kingston Fury Beast Black 16GB',
                'KingSton',
                '850.000₫',
                17,
                'Bộ nhớ Ram Kingston Fury DDR4 tự động ép xung với tần số cao nhất được công bố, lên đến 3200 MHz, để cung cấp hiệu năng cao nhất cho các bo mạch chủ có Chipset 100 Series và x99 của Intel. Tăng hiệu suất tối đa cho các vi xử lý 2, 4, 6 và 8-core của Intel giúp nhanh chóng biên tập video, dựng phim 3D, chơi game và xử lý AI. Thiết kế bộ tản nhiệt có độ cao thấp với phong cách độc đáo và mạnh mẽ giúp tương thích với các loại Case có kích thước nhỏ và dáng vẻ mạnh mẽ sẽ làm cho hệ thống của bạn thêm chuyên nghiệp.'
            )
        },
        DDR5: {
            id1: new product(
                'Ram PC Corsair Vengeance 16GB',
                'Corsair',
                '1.280.000₫',
                7,
                'Ram PC Corsair Vengeance DDR5 với hệ thống khả năng xử lý vượt trội đảm bảo CPU của bạn lấy dữ liệu nhanh chóng một cách dễ dàng. Cho dù bạn đang chơi game, sáng tạo nội dung, mở 100 tab hay đa tác vụ, PC của bạn đều có thể thực hiện các tác vụ phức tạp nhanh hơn bao giờ hết.'
            )
        }
    },
    DRIVE: {
        SSD: {
            id1: new product(
                'SSD Lexar 250GB',
                'Lexar',
                '490.000₫',
                14,
                'Ổ cứng SSD Lexar NM610 M.2 PCIe Gen3 x4 NVMe được thiết kế để nâng cao trải nghiệm PC của bạn với  tốc độ truyền dữ liệu cực cao, lên tới 2100MB/s đọc và ghi 1600MB/s. Trang bị công nghệ PCIe Gen3x4 NVMe 1.3 và được sản xuất với chip flash 3D NAND mới nhất.'
            ),
            id2: new product(
                'SSD Crucial P3 500GB',
                'Crucial',
                '880.000₫',
                12,
                'Ổ cứng SSD Crucial P3 NVMe PCIe Gen3 x4 được trang bị chuẩn giao tiếp NVMe cho tốc độ đọc ghi lên đến 3500MB/s và 3000MB/s(tùy vào dung lượng), cao hơn đến 1.6 lần so với Crucial P2. Vì vậy bạn sẽ có thể xử lý tất cả các công việc của mình nhanh hơn bao giờ hết.'
            ),
            id3: new product(
                'SSD Acer Predator GM7000 1TB',
                'Acer',
                '1.890.000₫',
                10,
                'Với tốc độ đọc và ghi liên tiếp lên đến 7400 MB/s và 6400MB/s, và tốc độ random đọc/ghi lên đến 1000K/1000K IOPS SSD Acer Predator GM7000 1TB PCIe Gen4 x4 NVMe M.2 sẽ giúp nâng cao tối đa hiệu suất nhằm giúp PC của bạn đáp ứng mọi nhu cầu của các trò chơi, ứng dụng và phần mềm đòi hỏi khắt khe nhất về phần cứng'
            ),
            id4: new product(
                'SSD Acer Predator GM7000 2TB',
                'Acer',
                '3.150.000₫',
                7,
                'Với tốc độ đọc và ghi liên tiếp lên đến 7400 MB/s và 6700MB/s, và tốc độ random đọc/ghi lên đến 1300K/1100K IOPS SSD Acer Predator GM7000 2TB PCIe Gen4 x4 NVMe M.2 sẽ giúp nâng cao tối đa hiệu suất nhằm giúp PC của bạn đáp ứng mọi nhu cầu của các trò chơi, ứng dụng và phần mềm đòi hỏi khắt khe nhất về phần cứng'
            )
        },
        HDD: {
            id1: new product(
                'HDD WD Purple 1TB',
                'Western Digital',
                '1.190.000₫',
                12,
                'Được xây dựng cho các hệ thống bảo mật hoạt động 24/7 với độ phân giải cao. Tốc độ tải công việc được hỗ trợ lên tới 180 TB / năm 1 và hỗ trợ tới 64 camera, các ổ WD Purple được tối ưu hóa cho các hệ thống giám sát. Các ổ WD Purple 8TB, 10TB & 12TB được thiết kế để hỗ trợ phân tích Deep Learning trong các NVR có khả năng AI và có xếp hạng khối lượng công việc nâng cao lên tới 360TB / năm.'
            ),
            id2: new product(
                'HDD WD Blue 2TB',
                'Western Digital',
                '1.520.000₫',
                15,
                'Tăng cường khả năng lưu trữ cho PC của bạn với ổ Western Blue, thương hiệu được thiết kế hoàn hảo dành cho PC với các ứng dụng văn phòng và web.'
            ),
            id3: new product(
                'HDD WD Blue 4TB',
                'Western Digital',
                '2.550.000₫',
                10,
                'Tăng cường khả năng lưu trữ cho PC của bạn với ổ Western Blue, thương hiệu được thiết kế hoàn hảo dành cho PC với các ứng dụng văn phòng và web.'
            ),
            id4: new product(
                'HDD WD Blue 6TB',
                'Western Digital',
                '3.950.000₫',
                12,
                'Tăng cường khả năng lưu trữ cho PC của bạn với ổ Western Blue, thương hiệu được thiết kế hoàn hảo dành cho PC với các ứng dụng văn phòng và web.'
            )
        }
    }

}