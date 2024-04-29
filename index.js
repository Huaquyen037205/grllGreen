var index = 1;
        changeIMG =function(){
            var imgs =["slider_1.webp", "slider_2.webp"];
            document.getElementById("slider").src=imgs[index];
            index++;
            if(index==2){
                index=0;
            }

        }
        setInterval(changeIMG, 2500);

        window.onload = function() {
            document.getElementsByClassName("tablinks")[0].classList.add("active");
            document.getElementById("Tất cả").style.display = "block"; 
        };
        function openCity(evt, fullMenu) {
            var i, tabcontent, tablinks;
    
            // ẩn
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
    
            // xóa 'active'
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }
    
            // hiển thị tab
            document.getElementById(fullMenu).style.display = "block";
            evt.currentTarget.className += " active";
        }


        const data = [
            { id: "1", hinh: "dautay.webp", gia: 130, ten: "Dâu Tây", sl: 1, tt: 130 },
            { id: "2", hinh: "22-0ebe1919-23f8-423c-82dc-05bceb49649d.jpg", gia: 10, ten: "Nấm Kim Châm", sl: 1, tt: 10 },
            { id: "3", hinh: "gaoLut.jpg", gia: 180, ten: "Yến Mạch Gạo Lứt", sl: 1, tt: 180 },
            { id: "4", hinh: "bot-ngu-coc-4hqe9jaw.png", gia: 160, ten: "Bột Ngũ Cốc", sl: 1, tt: 160  }
        ];
        
        const arrCart = []; 
        let total = 0;
        
        let str = "";
        data.forEach(el => {
            str += `
                <div class="product">
                    <div class="product-img">
                        <img src="${el.hinh}" alt="">
                        <div class="detail">
                            <a onclick="addToCart('${el.id}')">Chi tiết</a>
                        </div>
                    </div>
                    <div class="product-info">
                        <p>${el.ten}</p>
                        <del>150.000đ</del><span>/ ${el.gia}.000đ</span>
                    </div>
                    <div class="buy">
                        <input type="submit" value="Mua Ngay">
                        <input type="submit" value="Thêm Vào Giỏ Hàng">
                    </div>
                </div>
            `;
        });
        
        document.getElementById("aside").innerHTML = str;
        
        function addCart(id, gia) {
            let item = {};
            item.id = id; 
            item.gia = gia; 
            item.soluong = 1;
            if (arrCart.length == 0) {
                arrCart.push(item);
            } else {
                let idx = -1;
                for (let i = 0; i < arrCart.length; i++) {
                    if (arrCart[i].id == id) {
                        idx = i;
                        break;
                    }
                }
                if (idx < 0) {
                    arrCart.push(item);
                } else {
                    arrCart[idx].soluong++;
                }
            }
            total++;
            document.querySelector(".cart").innerHTML = total;
        }
        
        function addToCart(id) {
            data.forEach(el => {
                if (el.id === id) {
                    localStorage.setItem("sp", JSON.stringify(el));
                    window.location.href = "Chitietsanpham.html";
                }
            });
        }
        
        function loadCart() {
            let str = "<ul>";
            arrCart.forEach(item => {
                str += `<li> ${item.id} - ${item.soluong} </li>`;
            });
            str += "</ul>";
            document.querySelector(".produce").innerHTML = str;
            document.querySelector(".cart").innerHTML = total;
        }