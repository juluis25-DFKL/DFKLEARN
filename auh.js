
// Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Elements
    const overlay = document.getElementById('authOverlay');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const ctaStart = document.getElementById('ctaStart');
    const ctaLogin = document.getElementById('ctaLogin');
    const cancelModal = document.getElementById('cancelModal');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const switchMode = document.getElementById('switchMode');
    const switchText = document.getElementById('switchText');
    const nameField = document.getElementById('nameField');
    const submitAuth = document.getElementById('submitAuth');
    const authForm = document.getElementById('authForm');

    let mode = 'signup'; // 'signup' | 'login'

    function openModal(newMode='signup'){
      mode = newMode;
      overlay.classList.add('active');
      updateModal();
    }
    function closeModal(){ overlay.classList.remove('active'); }

    function updateModal(){
      if(mode === 'signup'){
        authTitle.textContent = 'Créer un compte';
        authSubtitle.textContent = 'Inscris-toi pour commencer.';
        nameField.style.display = '';
        switchText.textContent = 'Déjà inscrit ?';
        switchMode.textContent = 'Se connecter';
        submitAuth.textContent = 'S’inscrire';
      }else{
        authTitle.textContent = 'Se connecter';
        authSubtitle.textContent = 'Heureux de te revoir.';
        nameField.style.display = 'none';
        switchText.textContent = 'Nouveau ici ?';
        switchMode.textContent = 'Créer un compte';
        submitAuth.textContent = 'Se connecter';
      }
    }

    // Openers
    signupBtn.addEventListener('click', ()=>openModal('signup'));
    ctaStart.addEventListener('click', ()=>openModal('signup'));
    loginBtn.addEventListener('click', ()=>openModal('login'));
    ctaLogin.addEventListener('click', ()=>openModal('login'));
    cancelModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });

    // Switch mode
    switchMode.addEventListener('click', ()=>{
      mode = (mode==='signup') ? 'login' : 'signup';
      updateModal();
    });

    // Demo form submit (à brancher plus tard sur Firebase/Auth)
    authForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(authForm));
      // ICI: intégrer Firebase Auth (createUserWithEmailAndPassword / signInWithEmailAndPassword)
      
      alert(`${mode === 'signup' ? 'Inscription' : 'Connexion'} (démo): ${data.email}`);
      closeModal();
      authForm.reset();
      window.location.href ='index.html'
    });

    // Accessibilité: escape pour fermer
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });