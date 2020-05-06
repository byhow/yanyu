import { Yan } from '../../dist/index';

// TODO: some how async, change to sync
test('short translation time', () => {
    const yan = new Yan();
    const start = Date.now();
    expect(yan.synthesis("日暮乡关何处是 烟波江上使人愁", "pinyin-syllables")).not.toBeNull();
    const end = Date.now();
    console.log(end - start);
    expect(end-start).toBeLessThan(20);
});


test('long translation time', () => {
    const yan = new Yan();
    const start = Date.now();
    expect(yan.synthesis("冷咖啡離開了杯墊 \
        我忍住的情緒在很後面 \
        拼命想挽回的從前 \
        在我臉上依舊清晰可見 \
        最美的不是下雨天 \
        是曾與妳躲過雨的屋簷 \
        回憶的畫面 在盪著鞦韆 \
        夢開始不甜 \
        妳說把愛漸漸 放下會走更遠 \
        又何必去改變 已錯過的時間 \
        妳用妳的指尖 阻止我說再見 \
        想像妳在身邊 在完全失去之前 \
        妳說把愛漸漸 放下會走更遠 \
        或許命運的籤 讓我們遇見 \
        只讓我們相戀 這一季的秋天 \
        飄落後才發現 這幸福的碎片 \
        要我怎麼撿", "pinyin-syllables")).not.toBeNull();
    const end = Date.now();
    expect(end-start).toBeLessThan(35);
});