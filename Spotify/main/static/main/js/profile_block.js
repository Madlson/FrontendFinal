const profileBlock = document.getElementById('profile_block_section_header');
const profileDetailBlock = document.getElementById('profile_detail_section_header_block');
let isActive = true;


profileBlock.addEventListener('click', () => {
    if(isActive) {
        profileDetailBlock.style.display = 'flex';
        isActive = false;
    }
    else {
        profileDetailBlock.style.display = 'none';
        isActive = true;
    }
})