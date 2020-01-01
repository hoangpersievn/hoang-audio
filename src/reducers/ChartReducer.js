import * as Types from '../constants/Types';

const initialState = {
    vpop: [
        { id: '', artists: '', thumbnail: '', title: '' }
    ],
    kpop: [
        { id: '', artists: '', thumbnail: '', title: '' }
    ],
    pop: [
        { id: "CY8uYlZt", artists: ["Lê Bảo Bình"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/5/3/7/a53786e6d5671c6a87c29ab79d5c0251.jpg", title: "Lá Xa Lìa Cành"},
        { id: "2tA704YZh", artists: ["Đạt G"," DuUyen"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/1/4/0/c140ebb6799391799b29a8eabae217f5.jpg", title: "Bánh Mì Không" },
        { id: "D7POB9MSY", artists: ["Dương Hoàng Yến", " Thanh Hưng"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/e/9/6/1/e961a45b0004018a92db04d9d301f3dc.jpg", title: "Em Một Mình Quen Rồi" },
        { id: "yIIG-zx0g", artists: ["Đình Dũng"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/3/d/8/c3d8996c4c5167812bc34ae662553111.jpg", title: "Sai Lầm Của Anh"},
        { id: "fgi0-BjXl", artists: ["Khổng Tú Quỳnh", " RIN9"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/d/5/c/fd5c66c1566a2ce0bd41043a858a239a.jpg", title: "Mãi Mãi Là Một Lời Nói Dối"},
        { id: "qqoRRFpty", artists: ["Chi Dân"], thumbnail: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/9/9/9/e/999e7aa9d6d42e60d3b2f28072a0c968.jpg", title: "Sao Chẳng Phải Là Anh" }
    ],
    activeChart: 'pop'
};

export default (state=initialState, action) => {

    switch(action.type) {
        
        case Types.FETCH_POP_CHART:
            return { ...state, activeChart: 'pop' };
        case Types.FETCH_KPOP_CHART:
            return { ...state, activeChart: 'kpop' };
        case Types.FETCH_VPOP_CHART:
            return { ...state, activeChart: 'vpop' };
        case Types.CHANGE_ACTIVE_CHART:
            return { ...state, activeChart: action.popType };
        default :
            return state;
    };
};
