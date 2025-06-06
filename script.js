// AniList API (GraphQL)
const ANILIST_API_URL = "https://graphql.anilist.co";
// CORS Proxy para html2canvas
const CORS_PROXY_URL = "https://api.allorigins.win/raw?url=";


let initialGenres = [
{ name: "Ação/Aventura", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/acaoaventura.png" },
{ name: "Comédia", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/comedia.png" },
{ name: "Cute Girls", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/cutegirls.png" },
{ name: "Drama", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/drama.png" },
{ name: "Escola Mágica", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/escolamagica.png" },
{ name: "Escolar", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/escolar.png" },
{ name: "Esporte", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/esporte.png" },
{ name: "Fantasia", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/fantasia.png" },
{ name: "Ficção Científica", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/7a2d1a313d228fc842e8569212f0590e7c420c95/images/ficcaocientifica.png" },
{ name: "Garota Mágica", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/garotasmagicas.png" },
{ name: "Harém", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/harem.png" },
{ name: "Histórico", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/historico.png" },
{ name: "Isekai de Ação", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/isekaiacao.png" },
{ name: "Isekai de Comédia/Slow Life", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/isekaicomedia.png" },
{ name: "Isekai de Vilã/Santa", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/isekaivilasanta.png" },
{ name: "Mecha/Espacial", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/mecha.png" },
{ name: "Militar", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/militar.png" },
{ name: "Mistério/Policial", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/misteriopolicial.png" },
{ name: "Música/Idol", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/musicaidol.png" },
{ name: "Pós-Apocalíptico", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/posapocaliptico.png" },
{ name: "Profissional", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/profissional.png" },
{ name: "Psicológico", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/psicologico.png" },
{ name: "Romance", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/romance.png" },
{ name: "Slice of Life", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/slicelife.png" },
{ name: "Sobrenatural/Terror", imageUrl: "https://raw.githubusercontent.com/marioporfirio/animebingo/c6d5c9f27e507f6ed6800bc7812f37e6a8be9188/images/sobrenaturalterror.png" }
];
    initialGenres.sort((a, b) => a.name.localeCompare(b.name));
    initialGenres.forEach((genre, index) => {
        const startNum = index * 4 + 1;
        genre.numbers = [startNum, startNum + 1, startNum + 2, startNum + 3];
    });


    const PHASES = {
        GAME_MANAGEMENT: "GAME_MANAGEMENT",
        REGISTRATION: "REGISTRATION",
        INDIVIDUAL_DRAW_SELECTION: "INDIVIDUAL_DRAW_SELECTION",
        CLUB_GENRE_SETUP: "CLUB_GENRE_SETUP",
        INDICATION: "INDICATION",
        ANIME_DRAW_SELECTION: "ANIME_DRAW_SELECTION",
        CLUB_ANIME_DRAW: "CLUB_ANIME_DRAW",
        WATCH_LOOP: "WATCH_LOOP",
        CLUB_RESULT_DISPLAY: "CLUB_RESULT_DISPLAY"
    };

    const ALL_GAMES_STORAGE_KEY = 'animeBingoAllGamesData_v1_anilist';

    const BASE_GAME_INSTANCE_STATE = {
        id: null,
        name: "Anime Bingo",
        createdAt: null,
        userId: null,
        gameMode: 'infinito',
        currentPhase: PHASES.REGISTRATION,
        participants: [],
        assignedGenreNames: [],
        currentIndicatorTabId: null,
        clubGenre: null,
        clubAnimeIndication: null,
        clubIndications: []
    };

    let allGamesData = {
        activeGameId: null,
        games: {}
    };
    let gameState = {};
    let editingAnilistForParticipantId = null;

    let participantNameInput, participantAnilistUsernameInput, addParticipantButton, participantsListDiv, goToNextPhaseFromRegistrationButton, maxParticipantsWarning,
        registrationPhaseSection, individualDrawPhaseSection, participantsToDrawListDiv, drawnParticipantsListDiv,
        goToIndicationPhaseButton, indicationPhaseSection, indicationTabsDiv, indicationContentDiv, goToAnimeDrawPhaseButton, exportIndicationsButton,
        animeDrawPhaseSection, participantsToDrawAnimeListDiv, goToWatchLoopButton,
        watchLoopPhaseSection, watchLoopContentIndividual, watchLoopContentClub, allAnimesWatchedMessage,
        resetGameButton, genreGridFooterDiv, userIdDisplay, footerUserId,
        customAlertDiv, alertIconSpan, alertMessageContentSpan, alertCloseButton, alertConfirmButtonsDiv, alertCancelBtn, alertConfirmBtn,
        genreRevealModal, genreRevealParticipantNameModalTitle,
        genreRevealIconImg, genreRevealNameText, genreRevealNumberText, closeGenreRevealModalButton,
        animeRevealModal, animeRevealParticipantName, animeRevealCover, animeRevealTitleLink, animeRevealIndicator, closeAnimeRevealModalButton,
        gameManagementSection, newGameNameInput, newGameModeSelect, createNewGameButton, savedGamesListDiv, actualGameContentDiv, currentGameNameDisplay, switchGameButton,
        searchResultsModal, searchResultsListDiv, closeSearchResultsModalButton, animeRevealScore,
        toggleGenreLegendButton, genreLegendContainer, exportWatchListButton, exportFullIndicationHistoryButton,
        importFileInput, importGamesButton, exportAllGamesButton,

        clubGenreSetupPhaseSection, clubGenreDrawModeContent, drawClubGenreButton, clubGenreChooseModeContent,
        chosenClubGenreDisplay, chosenClubGenreIcon, chosenClubGenreName, goToClubIndicationPhaseButton,
        indicationPhaseTitle, clubGenreForIndicationDisplay, clubGenreForIndicationIcon, clubGenreForIndicationName,
        animeDrawPhaseTitle, clubGenreForAnimeDrawDisplay, clubGenreForAnimeDrawIcon, clubGenreForAnimeDrawName, drawClubAnimeButton,
        watchLoopPhaseTitle, clubResultGenre, clubResultGenreIcon, clubResultGenreName,
        clubResultAnime, clubResultAnimeCover, clubResultAnimeTitleLink, clubResultAnimeIndicator,
        clubResultParticipants, clubResultParticipantsList, exportClubResultButton;


    let currentAlertResolve = null;
    let currentSearchContext = null;

    const PLACEHOLDER_IMG_60x90 = 'https://placehold.co/60x90/1e293b/4f46e5?text=Capa';
    const PLACEHOLDER_IMG_150x225 = 'https://placehold.co/150x225/1e293b/4f46e5?text=Anime';
    const PLACEHOLDER_IMG_ERROR_60x90 = 'https://placehold.co/60x90/1e293b/ff0000?text=Erro';
    const PLACEHOLDER_IMG_SEARCH_RESULT = 'https://placehold.co/50x75/1e293b/4f46e5?text=Capa';
    const PLACEHOLDER_IMG_GENRE_ICON = 'https://placehold.co/64x64/1e293b/4f46e5?text=Icon';
    const PLACEHOLDER_IMG_ERROR_80x120 = 'https://placehold.co/80x120/1e293b/ff0000?text=Erro';
    const PLACEHOLDER_IMG_ERROR_40x60 = 'https://placehold.co/40x60/1e293b/ff0000?text=Erro';
    const PLACEHOLDER_IMG_ERROR_20x20 = 'https://placehold.co/20x20/1e293b/ff0000?text=X';


    // FUNÇÕES PRIMÁRIAS
    function generateUUID() { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16); }); }

    function saveAllGamesData() {
        localStorage.setItem(ALL_GAMES_STORAGE_KEY, JSON.stringify(allGamesData));
    }

    function saveCurrentGameToAllGames() {
        if (allGamesData.activeGameId && gameState && gameState.id === allGamesData.activeGameId) {
            allGamesData.games[allGamesData.activeGameId] = { ...gameState };
            saveAllGamesData();
        }
    }

    function loadAllGamesData() {
        const savedData = localStorage.getItem(ALL_GAMES_STORAGE_KEY);
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            allGamesData = {
                activeGameId: null,
                games: {},
                ...parsedData
            };
            if (!allGamesData.games) {
                allGamesData.games = {};
            }
        } else {
            allGamesData = { activeGameId: null, games: {} };
        }

        if (allGamesData.activeGameId && allGamesData.games[allGamesData.activeGameId]) {
            const gameToLoad = JSON.parse(JSON.stringify(allGamesData.games[allGamesData.activeGameId]));
            gameState = {
                ...BASE_GAME_INSTANCE_STATE,
                ...gameToLoad,
                id: gameToLoad.id || generateUUID(),
                name: gameToLoad.name || BASE_GAME_INSTANCE_STATE.name,
                createdAt: gameToLoad.createdAt || new Date().toISOString(),
                userId: gameToLoad.userId || generateUUID(),
                gameMode: gameToLoad.gameMode || BASE_GAME_INSTANCE_STATE.gameMode,
                currentPhase: gameToLoad.currentPhase || BASE_GAME_INSTANCE_STATE.currentPhase,
            };
            gameState.participants = (gameToLoad.participants || []).map(p => ({
                id: p.id || generateUUID(),
                name: p.name || "Participante Desconhecido",
                anilistUsername: p.anilistUsername || null,
                assignedGenre: p.assignedGenre || null,
                genreDrawNumber: p.genreDrawNumber || null,
                currentAssignedGenre: p.currentAssignedGenre || p.assignedGenre || null,
                genreHistory: Array.isArray(p.genreHistory) ? [...p.genreHistory] : [],
                animeToWatch: p.animeToWatch ? {...p.animeToWatch} : null,
                receivedIndications: Array.isArray(p.receivedIndications) ? p.receivedIndications.map(ind => ({...ind})) : [],
                watchedAnimesHistory: Array.isArray(p.watchedAnimesHistory) ? p.watchedAnimesHistory.map(hist => ({...hist})) : []
            }));
            gameState.assignedGenreNames = Array.isArray(gameToLoad.assignedGenreNames) ? [...gameToLoad.assignedGenreNames] : [];
            gameState.clubGenre = gameToLoad.clubGenre ? {...gameToLoad.clubGenre} : null;
            gameState.clubAnimeIndication = gameToLoad.clubAnimeIndication ? {...gameToLoad.clubAnimeIndication} : null;
            gameState.clubIndications = Array.isArray(gameToLoad.clubIndications) ? gameToLoad.clubIndications.map(ind => ({...ind})) : [];

            gameState.currentIndicatorTabId = gameToLoad.currentIndicatorTabId || (gameState.participants[0]?.id || null);
            if (gameState.participants.length > 0 && !gameState.participants.find(p => p.id === gameState.currentIndicatorTabId)) {
                gameState.currentIndicatorTabId = gameState.participants[0].id;
            } else if (gameState.participants.length === 0) {
                gameState.currentIndicatorTabId = null;
            }

        } else {
            allGamesData.activeGameId = null;
            gameState = {};
        }
    }


    function showAlert(message, type = 'info', duration = 3000) {
        alertMessageContentSpan.innerHTML = message;
        customAlertDiv.classList.remove('hidden', 'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-600');
        alertConfirmButtonsDiv.classList.add('hidden');
        let iconText = 'ℹ️';
        if (type === 'success') { customAlertDiv.classList.add('bg-green-500'); iconText = '✅'; }
        else if (type === 'error') { customAlertDiv.classList.add('bg-red-500'); iconText = '❌'; }
        else if (type === 'custom_confirm') { customAlertDiv.classList.add('bg-yellow-600'); iconText = '❓'; alertConfirmButtonsDiv.classList.remove('hidden'); }
        else { customAlertDiv.classList.add('bg-blue-500'); } // Default 'info'
        alertIconSpan.textContent = iconText;
        if (type !== 'custom_confirm' && duration !== Infinity) setTimeout(() => customAlertDiv.classList.add('hidden'), duration);
    }
    async function showConfirmAlert(message) { showAlert(message, 'custom_confirm', Infinity); return new Promise(resolve => currentAlertResolve = resolve); }

    function ensureImageIsAccessible(src, placeholderOnError) {
        return new Promise((resolve) => {
            if (!src || src.startsWith('https://placehold.co') || src.startsWith('data:image/png;base64') || src.startsWith(CORS_PROXY_URL)) {
                resolve(src || placeholderOnError);
                return;
            }
            
            if (src.includes("raw.githubusercontent.com")) {
                const gitHubImg = new Image();
                gitHubImg.crossOrigin = "anonymous";
                gitHubImg.onload = () => resolve(src);
                gitHubImg.onerror = () => resolve(placeholderOnError);
                gitHubImg.src = src;
                return;
            }
            
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => resolve(src);
            img.onerror = () => {
                console.warn(`CORS-related error on direct load for ${src}. Retrying via proxy...`);
                const proxyImg = new Image();
                proxyImg.crossOrigin = 'anonymous';
                proxyImg.onload = () => resolve(proxyImg.src);
                proxyImg.onerror = (err) => {
                    console.error(`Failed to load image via proxy as well for ${src}. Using placeholder.`, err);
                    resolve(placeholderOnError);
                };
                proxyImg.src = `${CORS_PROXY_URL}${encodeURIComponent(src)}`;
            };

            img.src = src;
        });
    }


    function renderParticipantsList() {
        participantsListDiv.innerHTML = gameState.participants.length === 0 ? '<p class="text-slate-400 text-sm">Nenhum participante.</p>' : '';
        gameState.participants.forEach((p, index) => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-slate-700 p-3 rounded-lg shadow';
            const anilistUserDisplay = p.anilistUsername ? `<span class="text-xs text-sky-400 ml-2">(@${p.anilistUsername})</span>` : '';
            div.innerHTML = `<div><span class="text-indigo-300">${index + 1}. ${p.name}</span>${anilistUserDisplay}</div>
                                     <button data-id="${p.id}" class="removeParticipantButton text-red-400 hover:text-red-300"><span role="img" aria-label="remover">🗑️</span></button>`;
            participantsListDiv.appendChild(div);
        });
        document.querySelectorAll('.removeParticipantButton').forEach(btn => btn.onclick = e => handleRemoveParticipant(e.currentTarget.dataset.id));

        const maxParticipants = (gameState.gameMode === 'infinito' || gameState.gameMode === 'tradicional') ? initialGenres.length : Infinity;
        addParticipantButton.disabled = gameState.participants.length >= maxParticipants && maxParticipants !== Infinity;
        maxParticipantsWarning.classList.toggle('hidden', gameState.participants.length < maxParticipants || maxParticipants === Infinity);
        if(maxParticipants !== Infinity) maxParticipantsWarning.innerHTML = `<span role="img" aria-label="informação" class="inline mr-2">ℹ️</span> Máximo de ${maxParticipants} participantes para este modo.`;
        else maxParticipantsWarning.classList.add('hidden');

        goToNextPhaseFromRegistrationButton.classList.toggle('hidden', gameState.participants.length === 0);
    }

    function renderIndividualDrawSelection() {
        participantsToDrawListDiv.innerHTML = '';
        drawnParticipantsListDiv.innerHTML = '';
        let participantsYetToDraw = 0;
        gameState.participants.forEach(p => {
            if (!p.assignedGenre) {
                participantsYetToDraw++;
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between bg-slate-700 p-3 rounded-lg shadow';
                div.innerHTML = `<span class="text-indigo-300">${p.name}</span>
                                     <button data-id="${p.id}" class="draw-genre-for-participant-button bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">Sortear para ${p.name.split(' ')[0]}</button>`;
                participantsToDrawListDiv.appendChild(div);
            } else {
                const li = document.createElement('li');
                const genreDetails = initialGenres.find(g => g.name === p.assignedGenre);
                li.innerHTML = `${p.name} - <img src="${genreDetails?.imageUrl || PLACEHOLDER_IMG_SEARCH_RESULT}" alt="${genreDetails?.name || ''}" class="inline-block w-5 h-5 object-contain mx-1 rounded-sm"> ${p.assignedGenre} (Nº ${p.genreDrawNumber})`;
                drawnParticipantsListDiv.appendChild(li);
            }
        });
        if (participantsYetToDraw === 0 && gameState.participants.length > 0) {
             participantsToDrawListDiv.innerHTML = '<p class="text-green-400">Todos os participantes tiveram seus gêneros iniciais sorteados!</p>';
        } else if (gameState.participants.length === 0) {
             participantsToDrawListDiv.innerHTML = '<p class="text-slate-400">Nenhum participante para sortear.</p>';
        }
        document.querySelectorAll('.draw-genre-for-participant-button').forEach(btn => btn.onclick = e => handleIndividualGenreDraw(e.currentTarget.dataset.id));
        goToIndicationPhaseButton.classList.toggle('hidden', participantsYetToDraw > 0 || gameState.participants.length === 0);
    }

    function showGenreRevealModal(participantName, genre, isClubGenre = false) {
        genreRevealParticipantNameModalTitle.textContent = isClubGenre ? `Gênero para o Clube!` :`Sorteio para ${participantName}!`;
        genreRevealIconImg.src = genre.imageUrl || PLACEHOLDER_IMG_150x225;
        genreRevealIconImg.alt = genre.name;
        genreRevealNameText.textContent = genre.name;
        genreRevealNumberText.textContent = genre.drawnNumber || '';
        genreRevealNumberText.classList.toggle('hidden', !genre.drawnNumber && !isClubGenre);
        document.querySelector('#genreRevealModal .text-slate-300.mb-1').textContent = (isClubGenre || !genre.drawnNumber) ? 'Gênero Sorteado/Escolhido:' : 'Número Sorteado:';

        genreRevealModal.classList.remove('hidden');
    }

    function renderIndicationPhase() {
        const isClubMode = gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido';

        indicationPhaseTitle.innerHTML = `<span role="img" aria-label="caneta" class="mr-3 text-2xl">✏️</span> ${isClubMode ? 'Indicações para o Clube' : 'Fase de Indicações de Anime'}`;
        clubGenreForIndicationDisplay.classList.toggle('hidden', !isClubMode || !gameState.clubGenre);

        if (isClubMode) {
            exportIndicationsButton.classList.toggle('hidden', !gameState.clubIndications || gameState.clubIndications.length === 0);
        } else {
            const canIndicate = gameState.participants.length > 1 && gameState.participants.some(p => p.currentAssignedGenre);
            exportIndicationsButton.classList.toggle('hidden', !canIndicate);
        }


        if (isClubMode && gameState.clubGenre) {
            clubGenreForIndicationIcon.src = gameState.clubGenre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON;
            clubGenreForIndicationName.textContent = gameState.clubGenre.name;
        }

        indicationTabsDiv.innerHTML = '';
        indicationContentDiv.innerHTML = '';

        if (isClubMode) {
            gameState.participants.forEach(indicator => {
                const indicatorDiv = document.createElement('div');
                indicatorDiv.className = 'mb-4 p-3 bg-slate-700/50 rounded-lg';
                indicatorDiv.innerHTML = `<h4 class="text-lg font-semibold text-indigo-300 mb-2">Indicação de ${indicator.name} para o gênero "${gameState.clubGenre?.name || 'N/D'}"</h4>`;

                const existingIndication = gameState.clubIndications.find(ind => ind.indicatorId === indicator.id);

                if (existingIndication) {
                    indicatorDiv.innerHTML += `
                        <div class="indication-card">
                            <img src="${existingIndication.animeImageUrl || PLACEHOLDER_IMG_60x90}" alt="Capa de ${existingIndication.animeTitle}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_60x90}';">
                            <div class="indication-card-info">
                                <a href="${existingIndication.animeUrl}" target="_blank" class="font-semibold text-green-400 hover:underline">${existingIndication.animeTitle}</a>
                                ${existingIndication.score ? `<span class="score-badge">${existingIndication.score.toFixed(2)}</span>` : ''}
                            </div>
                            <button data-indicator-id="${indicator.id}" class="remove-club-indication-button text-red-400 hover:text-red-300 ml-auto p-1"><span role="img" aria-label="remover indicação">🗑️</span></button>
                        </div>`;
                } else {
                    indicatorDiv.innerHTML += `
                        <div class="flex flex-col sm:flex-row gap-2 items-center">
                            <input type="text" data-indicator-id="${indicator.id}" placeholder="Nome do Anime" class="club-indication-input w-full sm:flex-grow p-2 rounded bg-slate-600 border border-slate-500 placeholder-slate-400 text-sm">
                            <button data-indicator-id="${indicator.id}" class="indicate-club-anime-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg text-sm w-full sm:w-auto">Indicar para o Clube</button>
                        </div>`;
                }
                indicationContentDiv.appendChild(indicatorDiv);
            });
            document.querySelectorAll('.indicate-club-anime-button').forEach(btn => btn.onclick = handleClubIndicationSubmit);
            document.querySelectorAll('.club-indication-input').forEach(input => {
                 input.addEventListener('keypress', (event) => {
                     if (event.key === 'Enter') {
                         event.preventDefault();
                         const correspondingButton = input.nextElementSibling;
                         if (correspondingButton && correspondingButton.classList.contains('indicate-club-anime-button')) {
                             correspondingButton.click();
                         }
                     }
                 });
            });
            document.querySelectorAll('.remove-club-indication-button').forEach(btn => btn.onclick = handleRemoveClubIndication);

            const allClubIndicationsDone = gameState.participants.length > 0 && gameState.participants.every(p => gameState.clubIndications.some(ind => ind.indicatorId === p.id));
            goToAnimeDrawPhaseButton.classList.toggle('hidden', !allClubIndicationsDone);

        } else { // Modos Infinito/Tradicional
            if (!gameState.currentIndicatorTabId && gameState.participants.length > 0) {
                gameState.currentIndicatorTabId = gameState.participants[0].id;
            }
            gameState.participants.forEach(indicator => {
                const tabButton = document.createElement('button');
                tabButton.textContent = indicator.name.split(' ')[0];
                tabButton.dataset.indicatorId = indicator.id;
                tabButton.className = `py-2 px-4 font-medium border-b-2 transition-colors hover:border-indigo-400 hover:text-indigo-400 whitespace-nowrap ${gameState.currentIndicatorTabId === indicator.id ? 'tab-button-active' : 'border-transparent text-slate-400'}`;
                tabButton.onclick = () => { gameState.currentIndicatorTabId = indicator.id; renderApp(); };
                indicationTabsDiv.appendChild(tabButton);
            });

            const currentIndicator = gameState.participants.find(p => p.id === gameState.currentIndicatorTabId);
            if (!currentIndicator) {
                console.log("Modo não-clube: currentIndicator não encontrado. Retornando.");
                return;
            }

            const indicatorSection = document.createElement('div');
            indicatorSection.innerHTML = `<h3 class="text-xl font-semibold text-yellow-400 mb-3 mt-2">Indicações de ${currentIndicator.name}:</h3>`;

            let hasReceiversToShow = false;
            gameState.participants.forEach(receiver => {
                if (receiver.id === currentIndicator.id) return;
                if (!receiver.currentAssignedGenre) {
                     return;
                }
                hasReceiversToShow = true;

                const existingIndication = receiver.receivedIndications?.find(ind => ind.indicatorId === currentIndicator.id && ind.genreContext === receiver.currentAssignedGenre);
                const receiverGenreDetails = initialGenres.find(g => g.name === receiver.currentAssignedGenre);

                const receiverDiv = document.createElement('div');
                receiverDiv.className = 'mb-4 p-3 bg-slate-700/50 rounded-lg';
                let receiverInfoHTML = `<p class="mb-2 text-indigo-300">Para: <span class="font-semibold">${receiver.name}</span>`;
                if (receiverGenreDetails) {
                    receiverInfoHTML += ` - Gênero Atual: <img src="${receiverGenreDetails.imageUrl || PLACEHOLDER_IMG_SEARCH_RESULT}" alt="${receiverGenreDetails.name}" class="inline-block w-5 h-5 object-contain mx-1 rounded-sm"> ${receiverGenreDetails.name}`;
                }
                receiverInfoHTML += `</p>`;

                let indicationContentHTML = '';
                if (existingIndication) {
                    indicationContentHTML = `
                            <div class="indication-card">
                                <img src="${existingIndication.animeImageUrl || PLACEHOLDER_IMG_60x90}" alt="Capa de ${existingIndication.animeTitle}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_60x90}';">
                                <div class="indication-card-info">
                                    <a href="${existingIndication.animeUrl}" target="_blank" class="font-semibold text-green-400 hover:underline">${existingIndication.animeTitle}</a>
                                    ${existingIndication.score ? `<span class="score-badge">${existingIndication.score.toFixed(2)}</span>` : ''}
                                </div>
                                <button data-indicator-id="${currentIndicator.id}" data-receiver-id="${receiver.id}" class="remove-indication-button text-red-400 hover:text-red-300 ml-auto p-1"><span role="img" aria-label="remover indicação">🗑️</span></button>
                            </div>`;
                } else {
                    indicationContentHTML = `
                            <div class="flex flex-col sm:flex-row gap-2 items-center">
                                <input type="text" data-indicator-id="${currentIndicator.id}" data-receiver-id="${receiver.id}" placeholder="Nome do Anime" class="indication-input w-full sm:flex-grow p-2 rounded bg-slate-600 border border-slate-500 placeholder-slate-400 text-sm">
                                <button data-indicator-id="${currentIndicator.id}" data-receiver-id="${receiver.id}" class="indicate-anime-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg text-sm w-full sm:w-auto">Indicar</button>
                            </div>`;
                }
                receiverDiv.innerHTML = receiverInfoHTML + indicationContentHTML;
                indicatorSection.appendChild(receiverDiv);
            });

            if (!hasReceiversToShow && gameState.participants.length > 1) {
                 indicatorSection.innerHTML += `<p class="text-slate-400 italic">Nenhum participante elegível para receber indicações de ${currentIndicator.name} no momento (verifique se eles têm gêneros sorteados).</p>`;
            } else if (gameState.participants.length <=1) {
                 indicatorSection.innerHTML += `<p class="text-slate-400 italic">São necessários pelo menos 2 participantes para o sistema de indicações.</p>`;
            }


            indicationContentDiv.appendChild(indicatorSection);

            document.querySelectorAll('.indicate-anime-button').forEach(btn => btn.onclick = handleIndicationSubmit);
            document.querySelectorAll('.indication-input').forEach(input => {
                input.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        let sibling = input.nextElementSibling;
                        while(sibling) {
                            if(sibling.classList.contains('indicate-anime-button')) {
                                sibling.click();
                                break;
                            }
                            sibling = sibling.nextElementSibling;
                        }
                    }
                });
            });
            document.querySelectorAll('.remove-indication-button').forEach(btn => btn.onclick = handleRemoveIndication);

            let allOriginalModesDone = true;
            if (gameState.participants.length < 2 && gameState.participants.length > 0) {
                allOriginalModesDone = true;
            } else if (gameState.participants.length >=2) {
                 for (const p1 of gameState.participants) {
                     for (const p2 of gameState.participants) {
                         if (p1.id === p2.id) continue;
                         if (!p2.currentAssignedGenre) {allOriginalModesDone = false; break;}
                         if (!p2.receivedIndications?.find(ind => ind.indicatorId === p1.id && ind.genreContext === p2.currentAssignedGenre)) {
                             allOriginalModesDone = false; break;
                         }
                     }
                     if (!allOriginalModesDone) break;
                 }
            } else {
                allOriginalModesDone = false;
            }
            goToAnimeDrawPhaseButton.classList.toggle('hidden', !allOriginalModesDone || gameState.participants.length === 0);
        }
    }

    async function handleIndicationSubmit(event, isClubIndication = false) {
        const button = event.currentTarget;
        const indicatorId = button.dataset.indicatorId;
        const receiverId = !isClubIndication ? button.dataset.receiverId : null;
        const inputElement = isClubIndication ?
            document.querySelector(`input.club-indication-input[data-indicator-id="${indicatorId}"]`) :
            document.querySelector(`input.indication-input[data-indicator-id="${indicatorId}"][data-receiver-id="${receiverId}"]`);
        const inputValue = inputElement.value.trim();

        if (!inputValue) {
            showAlert("Por favor, digite o nome do anime.", "error");
            return;
        }

        button.disabled = true;
        button.textContent = 'Buscando...';

        await searchAnimeByName(inputValue, indicatorId, receiverId, isClubIndication);

        button.disabled = false;
        button.textContent = isClubIndication ? 'Indicar para o Clube' : 'Indicar';
    }

    async function handleClubIndicationSubmit(event) {
        await handleIndicationSubmit(event, true);
    }

    function getStatusTagInfo(status) {
        const statusMap = {
            COMPLETED: { text: 'Completo', color: 'bg-green-600' },
            PLANNING: { text: 'Planejado', color: 'bg-sky-600' },
            CURRENT: { text: 'Assistindo', color: 'bg-blue-600' },
            PAUSED: { text: 'Pausado', color: 'bg-yellow-500' },
            DROPPED: { text: 'Dropado', color: 'bg-red-600' },
            REPEATING: { text: 'Reassistindo', color: 'bg-purple-600' },
        };
        return statusMap[status] || { text: status, color: 'bg-gray-500' };
    }

    function renderSearchResults(results) {
        searchResultsListDiv.innerHTML = '';
        if (!results || results.length === 0) {
            searchResultsListDiv.innerHTML = '<p class="text-slate-400">Nenhum resultado encontrado para animes finalizados.</p>';
            return;
        }
        results.forEach(anime => {
            const title = anime.title?.romaji || anime.title?.english || "Título Desconhecido";
            const imageUrl = anime.coverImage?.medium || PLACEHOLDER_IMG_SEARCH_RESULT;
            const scoreValue = anime.averageScore ? (anime.averageScore / 10).toFixed(2) : null;
            const score = scoreValue ? `<span class="score-badge">${scoreValue}</span>` : '<span class="text-xs text-slate-400">N/A</span>';
            const typeYear = `${anime.format || ''}${anime.startDate?.year ? ' (' + anime.startDate.year + ')' : ''}`;
            const episodes = anime.episodes ? `${anime.episodes} ep` : 'Ep. N/A';
            const genres = anime.genres?.slice(0, 2).join(', ') || 'Gêneros N/A';
            
            let tagsHTML = '';
            if (anime.participantStatuses && anime.participantStatuses.length > 0) {
                tagsHTML = anime.participantStatuses.map(ps => {
                    const { text, color } = getStatusTagInfo(ps.status);
                    return `<span class="status-tag ${color}">${ps.participantName} (${text})</span>`;
                }).join('');
            } else if (anime.mediaListStatus) { // Fallback for individual mode
                const { text, color } = getStatusTagInfo(anime.mediaListStatus);
                tagsHTML = `<span class="status-tag ${color}">${text}</span>`;
            }
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'search-result-item';
            itemDiv.innerHTML = `
                    <img src="${imageUrl}" alt="Capa de ${title}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_40x60}';">
                    <div class="search-result-info">
                        <div>
                            <p class="font-semibold text-sky-300">${title}</p>
                            <p class="text-xs text-slate-300">${typeYear} - ${episodes}</p>
                            <p class="text-xs text-slate-400">${genres}</p>
                        </div>
                        <div class="mt-2 flex flex-wrap gap-1">
                            ${tagsHTML}
                        </div>
                    </div>
                    <div class="search-result-actions flex flex-col items-end gap-1 ml-auto">
                        ${score}
                        <button data-anilist-id="${anime.id}" class="select-search-result-button bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-1 px-2 rounded">Selecionar</button>
                    </div>
            `;
            searchResultsListDiv.appendChild(itemDiv);
        });
        document.querySelectorAll('.select-search-result-button').forEach(btn => btn.onclick = handleSearchResultSelection);
        searchResultsModal.classList.remove('hidden');
    }
    
    async function fetchUserAnimeListStatuses(username) {
        const query = `
            query ($userName: String) {
              MediaListCollection(userName: $userName, type: ANIME, forceSingleCompletedList: true) {
                lists {
                  entries {
                    mediaId
                    status
                  }
                }
              }
            }
        `;
        const variables = { userName: username };
        
        try {
            const response = await fetch(ANILIST_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query, variables })
            });
            const result = await response.json();
            if (result.errors) {
                const userNotFound = result.errors.some(e => e.message.toLowerCase().includes('user not found') || e.status === 404);
                if (userNotFound) {
                    console.warn(`Usuário AniList "${username}" não encontrado. Verificação pulada.`);
                    return new Map();
                }
                throw new Error(result.errors.map(e => e.message).join('\n'));
            }
            const statusMap = new Map();
            result.data?.MediaListCollection?.lists?.forEach(list => {
                list.entries.forEach(entry => {
                    statusMap.set(entry.mediaId, entry.status);
                });
            });
            return statusMap;
        } catch (error) {
            console.error("Erro ao buscar a lista do usuário no AniList:", error);
            showAlert(`Não foi possível buscar a lista de ${username}.`, "warning", 4000);
            return new Map();
        }
    }


    async function searchAnimeByName(query, indicatorId, receiverId, isClubIndication = false) {
         const graphqlQuery = `
            query ($search: String) {
                Page(page: 1, perPage: 50) {
                    media(search: $search, type: ANIME, sort: SEARCH_MATCH, status: FINISHED) {
                        id
                        title { romaji english }
                        coverImage { medium }
                        averageScore
                        format
                        startDate { year }
                        episodes
                        genres
                        siteUrl
                    }
                }
            }
        `;
        const variables = { search: query };

        try {
            const response = await fetch(ANILIST_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query: graphqlQuery, variables })
            });

            const data = await response.json();
            if (data.errors) throw new Error(data.errors.map(e => e.message).join('\n'));
            
            let results = data.data?.Page?.media;
            if (!results || results.length === 0) {
                showAlert(`Nenhum resultado encontrado para animes finalizados com o termo "${query}".`, "info");
                return;
            }

            if (isClubIndication) {
                const usersToCheck = gameState.participants.filter(p => p.anilistUsername);
                if (usersToCheck.length > 0) {
                    const listPromises = usersToCheck.map(user => 
                        fetchUserAnimeListStatuses(user.anilistUsername)
                            .then(statusMap => ({ participantName: user.name.split(' ')[0], statusMap }))
                    );
                    const allUserLists = await Promise.all(listPromises);

                    const masterStatusMap = new Map();
                    allUserLists.forEach(userList => {
                        userList.statusMap.forEach((status, animeId) => {
                            if (!masterStatusMap.has(animeId)) {
                                masterStatusMap.set(animeId, []);
                            }
                            masterStatusMap.get(animeId).push({ participantName: userList.participantName, status });
                        });
                    });

                    results = results.map(anime => ({
                        ...anime,
                        participantStatuses: masterStatusMap.get(anime.id) || []
                    }));
                }
            } else {
                const receiver = gameState.participants.find(p => p.id === receiverId);
                if (receiver && receiver.anilistUsername) {
                    const statusMap = await fetchUserAnimeListStatuses(receiver.anilistUsername);
                    results = results.map(anime => ({
                        ...anime,
                        mediaListStatus: statusMap.get(anime.id) || null
                    }));
                }
            }
            
            currentSearchContext = { indicatorId, receiverId, isClubIndication };
            renderSearchResults(results);
        } catch (error) {
            console.error("Erro ao buscar na API AniList:", error);
            showAlert(`Erro na busca AniList: ${error.message}.`, "error");
        }
    }

    async function handleSearchResultSelection(event) {
        const button = event.currentTarget;
        const anilistId = button.dataset.anilistId;
        if (currentSearchContext && anilistId) {
            const { indicatorId, receiverId, isClubIndication } = currentSearchContext;
            await fetchAnimeDetailsById(anilistId, indicatorId, receiverId, isClubIndication);
        }
        searchResultsModal.classList.add('hidden');
        currentSearchContext = null;
    }

    async function fetchAnimeDetailsById(anilistId, indicatorId, receiverId, isClubIndication = false) {
        const graphqlQuery = `
            query ($id: Int) {
                Media(id: $id, type: ANIME) {
                    id
                    title { romaji english }
                    coverImage { large medium }
                    averageScore
                    siteUrl
                }
            }
        `;
        const variables = { id: anilistId };

        try {
            const response = await fetch(ANILIST_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ query: graphqlQuery, variables })
            });

            const data = await response.json();
            if (data.errors) { throw new Error(data.errors.map(e => e.message).join('\n')); }

            const animeData = data.data.Media;
            const animeTitle = animeData.title.romaji || animeData.title.english || 'Título Desconhecido';
            const animeImageUrl = animeData.coverImage.large || animeData.coverImage.medium || PLACEHOLDER_IMG_60x90;
            const score = animeData.averageScore ? (animeData.averageScore / 10) : null;

            const indicator = gameState.participants.find(p => p.id === indicatorId);
            const indicationObject = {
                indicatorId,
                indicatorName: indicator.name,
                animeId: animeData.id,
                animeTitle,
                animeImageUrl,
                animeUrl: animeData.siteUrl,
                score,
                apiSource: 'AniList'
            };

            if (isClubIndication) {
                if (!gameState.clubIndications) gameState.clubIndications = [];
                gameState.clubIndications = gameState.clubIndications.filter(ind => ind.indicatorId !== indicatorId);
                gameState.clubIndications.push({ ...indicationObject, genreContext: gameState.clubGenre.name });
                showAlert(`"${animeTitle}" indicado por ${indicator.name} para o gênero do clube!`, "success");
            } else {
                const receiver = gameState.participants.find(p => p.id === receiverId);
                if (!receiver) { showAlert("Erro: Destinatário da indicação não encontrado.", "error"); return; }

                if (!receiver.receivedIndications) receiver.receivedIndications = [];
                receiver.receivedIndications = receiver.receivedIndications.filter(ind => !(ind.indicatorId === indicatorId && ind.genreContext === receiver.currentAssignedGenre) );

                receiver.receivedIndications.push({ ...indicationObject, status: 'pending', genreContext: receiver.currentAssignedGenre });
                showAlert(`"${animeTitle}" indicado para ${receiver.name} (Gênero: ${receiver.currentAssignedGenre})!`, "success");
            }
            renderApp();
        } catch (error) {
            console.error("Erro ao buscar detalhes do anime na API AniList:", error);
            showAlert(`Erro ao buscar detalhes na AniList: ${error.message}.`, "error");
        }
    }

    function handleRemoveIndication(event) {
        const button = event.currentTarget;
        const indicatorId = button.dataset.indicatorId;
        const receiverId = button.dataset.receiverId;
        const receiver = gameState.participants.find(p => p.id === receiverId);

        if (receiver && receiver.receivedIndications) {
            const indicationToRemove = receiver.receivedIndications.find(ind => ind.indicatorId === indicatorId && ind.genreContext === receiver.currentAssignedGenre);
            if (indicationToRemove) {
                receiver.receivedIndications = receiver.receivedIndications.filter(ind => !(ind.indicatorId === indicatorId && ind.genreContext === receiver.currentAssignedGenre));
                showAlert(`Indicação removida para ${receiver.name}.`, "success");
                renderApp();
            }
        }
    }
    function handleRemoveClubIndication(event) {
        const button = event.currentTarget;
        const indicatorId = button.dataset.indicatorId;
        if (gameState.clubIndications) {
            const indicationToRemove = gameState.clubIndications.find(ind => ind.indicatorId === indicatorId);
            if (indicationToRemove) {
                gameState.clubIndications = gameState.clubIndications.filter(ind => ind.indicatorId !== indicatorId);
                showAlert(`Indicação de ${indicationToRemove.indicatorName} para o clube removida.`, "success");
                renderApp();
            }
        }
    }


    function renderAnimeDrawPhase() {
        const isClubMode = gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido';
        animeDrawPhaseTitle.textContent = isClubMode ? "📺 Sorteio de Anime do Clube" : "📺 Sorteio de Anime para Assistir";

        clubGenreForAnimeDrawDisplay.classList.toggle('hidden', !isClubMode || !gameState.clubGenre);
        if (isClubMode && gameState.clubGenre) {
            clubGenreForAnimeDrawIcon.src = gameState.clubGenre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON;
            clubGenreForAnimeDrawName.textContent = gameState.clubGenre.name;
        }

        participantsToDrawAnimeListDiv.classList.toggle('hidden', isClubMode);
        drawClubAnimeButton.classList.toggle('hidden', !isClubMode || gameState.clubAnimeIndication);

        participantsToDrawAnimeListDiv.innerHTML = '';

        if (isClubMode) {
            if(gameState.clubAnimeIndication) {
                const anime = gameState.clubAnimeIndication;
                const scoreHTML = anime.score ? `<span class="score-badge">${anime.score.toFixed(2)}</span>` : '';
                participantsToDrawAnimeListDiv.innerHTML = `
                    <div class="p-4 bg-slate-700/70 rounded-lg shadow-md text-center">
                        <h3 class="text-xl font-semibold text-green-400 mb-2">Anime Sorteado para o Clube:</h3>
                        <img src="${anime.animeImageUrl || PLACEHOLDER_IMG_150x225}" alt="Capa de ${anime.animeTitle}" class="w-32 h-auto mx-auto my-2 rounded-md shadow-lg" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_80x120}';">
                        <a href="${anime.animeUrl}" target="_blank" class="text-2xl font-bold text-yellow-400 hover:underline">${anime.animeTitle}</a> ${scoreHTML}
                        <p class="text-sm text-slate-400 mt-1">Indicado por: ${anime.indicatorName}</p>
                    </div>`;
            } else {
                 participantsToDrawAnimeListDiv.innerHTML = `<p class="text-slate-300 text-center">Clique no botão "Sortear Anime do Clube" quando todas as indicações estiverem prontas.</p>`;
            }
            const allClubIndicationsMade = gameState.participants.length > 0 && gameState.participants.every(p => gameState.clubIndications.some(ind => ind.indicatorId === p.id));
            drawClubAnimeButton.disabled = !(gameState.clubIndications && gameState.clubIndications.length > 0 && allClubIndicationsMade);
            goToWatchLoopButton.classList.toggle('hidden', !gameState.clubAnimeIndication);
        } else {
            let participantsYetToDrawAnime = 0;
            gameState.participants.forEach(p => {
                if (!p.animeToWatch && p.currentAssignedGenre) {
                    const indicationsForCurrentGenre = p.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === p.currentAssignedGenre).length || 0;
                    if (indicationsForCurrentGenre > 0) {
                        participantsYetToDrawAnime++;
                        const div = document.createElement('div');
                        div.className = 'flex items-center justify-between bg-slate-700 p-3 rounded-lg shadow';
                        div.innerHTML = `<span class="text-indigo-300">${p.name} (Gênero: ${p.currentAssignedGenre})</span>
                                             <button data-id="${p.id}" class="draw-anime-button bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">Sortear Anime para ${p.name.split(' ')[0]}</button>`;
                        participantsToDrawAnimeListDiv.appendChild(div);
                    } else if (p.currentAssignedGenre) {
                         const pEl = document.createElement('p');
                         pEl.className = 'text-slate-400 p-3 bg-slate-700 rounded-lg shadow';
                         pEl.innerHTML = `${p.name} - Aguardando indicações para o gênero ${p.currentAssignedGenre}.`;
                         participantsToDrawAnimeListDiv.appendChild(pEl);
                    }
                } else if (p.animeToWatch) {
                    const pEl = document.createElement('p');
                    pEl.className = 'text-slate-400 p-3 bg-slate-700 rounded-lg shadow';
                    pEl.innerHTML = `${p.name} - Anime já sorteado: ${p.animeToWatch.animeTitle}.`;
                    participantsToDrawAnimeListDiv.appendChild(pEl);
                }
            });

            const allParticipantsHaveAnimeOrNoGenreOrNoIndications = gameState.participants.every(p =>
                p.animeToWatch ||
                !p.currentAssignedGenre ||
                (p.currentAssignedGenre && (p.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === p.currentAssignedGenre).length === 0))
            );

            if (participantsYetToDrawAnime === 0 && gameState.participants.length > 0 && allParticipantsHaveAnimeOrNoGenreOrNoIndications) {
                participantsToDrawAnimeListDiv.innerHTML = '<p class="text-green-400 text-center p-3">Todos os animes possíveis foram sorteados ou aguardam indicações!</p>';
            } else if (gameState.participants.length === 0) {
                participantsToDrawAnimeListDiv.innerHTML = '<p class="text-slate-400 text-center p-3">Nenhum participante.</p>';
            }
            document.querySelectorAll('.draw-anime-button').forEach(btn => btn.onclick = e => handleDrawAnimeForParticipant(e.currentTarget.dataset.id));
            goToWatchLoopButton.classList.toggle('hidden', participantsYetToDrawAnime > 0 || gameState.participants.length === 0);
        }
    }

    function handleDrawAnimeForParticipant(viewerId) {
        const viewer = gameState.participants.find(p => p.id === viewerId);
        if (!viewer || viewer.animeToWatch) return;
        if (!viewer.currentAssignedGenre) {
            showAlert(`Nenhum gênero atual definido para ${viewer.name}. Volte para o sorteio de gênero.`, "error");
            return;
        }

        const pendingIndications = viewer.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === viewer.currentAssignedGenre);
        if (!pendingIndications || pendingIndications.length === 0) {
            showAlert(`Nenhum anime foi indicado para ${viewer.name} no gênero ${viewer.currentAssignedGenre}. Redirecionando para indicações.`, "error");
            gameState.currentPhase = PHASES.INDICATION;
            gameState.currentIndicatorTabId = gameState.participants.find(p => p.id !== viewerId)?.id || gameState.participants[0]?.id;
            renderApp();
            return;
        }
        const randomIndex = Math.floor(Math.random() * pendingIndications.length);
        const chosenIndication = pendingIndications[randomIndex];

        viewer.animeToWatch = { ...chosenIndication, statusInternal: 'watching' };
        showAnimeRevealModal(viewer.name, viewer.animeToWatch);
        renderApp();
    }

    function handleDrawClubAnime() {
        if (!gameState.clubIndications || gameState.clubIndications.length === 0) {
            showAlert("Nenhum anime indicado para o clube ainda!", "error");
            return;
        }
        if (gameState.participants.length > 0 && !gameState.participants.every(p => gameState.clubIndications.some(ind => ind.indicatorId === p.id))) {
             showAlert("Ainda faltam participantes indicarem animes para o clube.", "warning");
             return;
        }

        const randomIndex = Math.floor(Math.random() * gameState.clubIndications.length);
        const chosenClubAnime = gameState.clubIndications[randomIndex];
        gameState.clubAnimeIndication = { ...chosenClubAnime };

        showAnimeRevealModal("o Clube", gameState.clubAnimeIndication);
        renderApp();
    }

    function showAnimeRevealModal(participantName, anime) {
        animeRevealParticipantName.textContent = `Anime para ${participantName} assistir!`;
        animeRevealCover.src = anime.animeImageUrl || PLACEHOLDER_IMG_150x225;
        animeRevealCover.alt = `Capa de ${anime.animeTitle}`;
        animeRevealTitleLink.href = anime.animeUrl || '#';
        animeRevealTitleLink.textContent = anime.animeTitle;
        animeRevealIndicator.textContent = anime.indicatorName;
        animeRevealScore.innerHTML = anime.score ? `<span class="score-badge">${anime.score.toFixed(2)}</span>` : '';
        animeRevealModal.classList.remove('hidden');
    }
    
    function handleAnilistUserUpdate(participantId) {
        const participant = gameState.participants.find(p => p.id === participantId);
        const input = document.getElementById(`anilist-edit-${participantId}`);
        if (participant && input) {
            const newUsername = input.value.trim();
            participant.anilistUsername = newUsername || null;
            editingAnilistForParticipantId = null;
            showAlert("Usuário AniList atualizado!", "success");
            renderApp();
        }
    }

    function renderWatchLoopPhase() {
        const isClubMode = gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido';

        if (watchLoopPhaseTitle) {
            watchLoopPhaseTitle.textContent = isClubMode ? "👀 Resultado do Bingo Clube" : "👀 Acompanhamento de Animes";
        }

        if (watchLoopContentIndividual) watchLoopContentIndividual.classList.toggle('hidden', isClubMode);
        if (watchLoopContentClub) watchLoopContentClub.classList.toggle('hidden', !isClubMode || !gameState.clubAnimeIndication);

        if (isClubMode) {
            if (exportWatchListButton) exportWatchListButton.classList.add('hidden');
            if (exportFullIndicationHistoryButton) exportFullIndicationHistoryButton.classList.toggle('hidden', !gameState.clubIndications || gameState.clubIndications.length === 0);
            if (exportClubResultButton) exportClubResultButton.classList.toggle('hidden', !gameState.clubAnimeIndication);
        } else {
            if (exportWatchListButton) exportWatchListButton.classList.remove('hidden');
            if (exportClubResultButton) exportClubResultButton.classList.add('hidden');
            const hasAnyIndividualIndications = gameState.participants.some(p => p.receivedIndications && p.receivedIndications.length > 0);
            if (exportFullIndicationHistoryButton) exportFullIndicationHistoryButton.classList.toggle('hidden', !hasAnyIndividualIndications);
        }


        if (isClubMode && gameState.clubAnimeIndication && gameState.clubGenre) {
            if (clubResultGenreIcon) {
                clubResultGenreIcon.src = gameState.clubGenre.imageUrl ? gameState.clubGenre.imageUrl : PLACEHOLDER_IMG_GENRE_ICON;
                clubResultGenreIcon.alt = gameState.clubGenre.name || 'Ícone Gênero';
            }
            if (clubResultGenreName) clubResultGenreName.textContent = gameState.clubGenre.name || 'Gênero não definido';
            if (clubResultAnimeCover) {
                clubResultAnimeCover.src = gameState.clubAnimeIndication.animeImageUrl ? gameState.clubAnimeIndication.animeImageUrl : PLACEHOLDER_IMG_150x225;
                clubResultAnimeCover.alt = `Capa de ${gameState.clubAnimeIndication.animeTitle || 'Anime não definido'}`;
            }
            if (clubResultAnimeTitleLink) {
                clubResultAnimeTitleLink.href = gameState.clubAnimeIndication.animeUrl || '#';
                let titleHTML = gameState.clubAnimeIndication.animeTitle || 'Título não disponível';
                if (gameState.clubAnimeIndication.score) {
                     titleHTML += ` <span class="score-badge">${gameState.clubAnimeIndication.score.toFixed(2)}</span>`;
                }
                clubResultAnimeTitleLink.innerHTML = titleHTML;
            }
            if (clubResultAnimeIndicator) clubResultAnimeIndicator.textContent = `Indicado por: ${gameState.clubAnimeIndication.indicatorName || 'Desconhecido'}`;
            if (clubResultParticipantsList) clubResultParticipantsList.innerHTML = gameState.participants.map(p => `<span class="inline-block bg-slate-600 px-2 py-1 rounded-md text-sm mr-2 mb-2">${p.name}</span>`).join('');
        } else if (!isClubMode) {
            if (watchLoopContentIndividual) {
                watchLoopContentIndividual.innerHTML = '';
                let allParticipantsFinishedAllCycles = true;

                gameState.participants.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'p-4 bg-slate-700/70 rounded-lg shadow-md mb-4';
                    
                    let headerHTML = '';
                    if (editingAnilistForParticipantId === p.id) {
                        headerHTML = `
                            <div class="flex items-center gap-2 mb-2">
                                <input type="text" id="anilist-edit-${p.id}" data-id="${p.id}" class="edit-anilist-input flex-grow p-1 rounded-md bg-slate-800 text-sm border border-slate-600 focus:ring-1 focus:ring-sky-500 outline-none" value="${p.anilistUsername || ''}" placeholder="Usuário AniList">
                                <button data-id="${p.id}" class="save-anilist-user-button bg-green-600 hover:bg-green-700 text-white text-xs font-bold p-2 rounded-md">Salvar</button>
                                <button data-id="${p.id}" class="cancel-anilist-user-button bg-slate-600 hover:bg-slate-500 text-white text-xs p-2 rounded-md">X</button>
                            </div>
                        `;
                    } else {
                        const anilistUserDisplay = p.anilistUsername ? `<span class="text-xs text-sky-400 ml-2">(@${p.anilistUsername})</span>` : '';
                        headerHTML = `
                            <h3 class="text-xl font-semibold text-indigo-300 mb-2 flex items-center">
                                ${p.name} ${anilistUserDisplay}
                                <button data-id="${p.id}" class="edit-anilist-user-button text-slate-400 hover:text-white ml-2 text-xs p-1">✏️</button>
                            </h3>`;
                    }
                    
                    let contentHTML = headerHTML;
                    const genreDetails = initialGenres.find(g => g.name === p.currentAssignedGenre);

                    if (genreDetails) {
                        contentHTML += `<p class="text-sm text-slate-400 mb-2">Gênero Atual: <img src="${genreDetails.imageUrl || PLACEHOLDER_IMG_SEARCH_RESULT}" alt="${genreDetails.name}" class="inline-block w-5 h-5 object-contain mx-1 rounded-sm"> ${genreDetails.name}</p>`;
                    } else if (p.assignedGenre && !p.currentAssignedGenre && (p.genreHistory?.length || 0) >= initialGenres.length && gameState.gameMode === 'infinito') {
                         contentHTML += `<p class="text-green-400 font-semibold">🎉 ${p.name} finalizou todos os ciclos de gênero!</p>`;
                    } else if (!p.currentAssignedGenre && p.assignedGenre && gameState.gameMode === 'tradicional'){
                        const initialGenreDetails = initialGenres.find(g => g.name === p.assignedGenre);
                        if(initialGenreDetails) contentHTML += `<p class="text-sm text-slate-400 mb-2">Gênero Sorteado: <img src="${initialGenreDetails.imageUrl || PLACEHOLDER_IMG_SEARCH_RESULT}" alt="${initialGenreDetails.name}" class="inline-block w-5 h-5 object-contain mx-1 rounded-sm"> ${initialGenreDetails.name}</p>`;
                    }

                    const pendingIndicationsForCurrentGenre = p.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === p.currentAssignedGenre) || [];

                    if (p.animeToWatch && p.animeToWatch.statusInternal === 'watching') {
                        allParticipantsFinishedAllCycles = false;
                        const scoreHTML = p.animeToWatch.score ? `<span class="score-badge">${p.animeToWatch.score.toFixed(2)}</span>` : '';
                        contentHTML += `
                                <p class="text-sm text-slate-300 mb-1">Assistindo agora:</p>
                                <div class="flex items-center gap-3 mb-3 p-2 bg-slate-600 rounded">
                                    <img src="${p.animeToWatch.animeImageUrl || PLACEHOLDER_IMG_60x90}" alt="${p.animeToWatch.animeTitle}" class="w-[50px] h-[75px] object-cover rounded" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_60x90}';">
                                    <div>
                                        <a href="${p.animeToWatch.animeUrl}" target="_blank" class="font-bold text-green-400 hover:underline">${p.animeToWatch.animeTitle}</a>
                                        ${scoreHTML}
                                        <p class="text-xs text-slate-400">Indicado por: ${p.animeToWatch.indicatorName}</p>
                                    </div>
                                </div>
                                <button data-id="${p.id}" class="mark-as-watched-button bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm w-full">Marcar como Visto</button>
                        `;
                    } else if (p.currentAssignedGenre && pendingIndicationsForCurrentGenre.length > 0 && gameState.gameMode !== 'infinito') {
                        allParticipantsFinishedAllCycles = false;
                        contentHTML += `<button data-id="${p.id}" class="draw-next-anime-button bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg text-sm w-full">Sortear Próximo Anime (Gênero: ${p.currentAssignedGenre})</button>`;
                    } else if (p.currentAssignedGenre && pendingIndicationsForCurrentGenre.length === 0) {
                         allParticipantsFinishedAllCycles = false;
                         contentHTML += `<p class="text-yellow-400 mb-2">Aguardando indicações para o gênero: ${p.currentAssignedGenre}.</p>`;
                         contentHTML += `<button data-id="${p.id}" class="go-to-indicate-for-participant-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-sm w-full">Ir para Indicações</button>`;
                         if (gameState.gameMode === 'infinito') {
                             const lastGenre = p.genreHistory && p.genreHistory.length > 0 ? p.genreHistory[p.genreHistory.length - 1] : null;
                             let availableNewGenres = initialGenres.filter(g => g.name !== lastGenre);
                             if (p.genreHistory && p.genreHistory.length >= initialGenres.length) availableNewGenres = [];
                             if (availableNewGenres.length > 0) {
                                  contentHTML += `<button data-id="${p.id}" class="draw-new-genre-button bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-sm w-full mt-2">Sortear Novo Gênero</button>`;
                             } else if (p.receivedIndications?.filter(ind => ind.status === 'watched').length === p.receivedIndications?.length && p.receivedIndications?.length > 0){
                                 contentHTML = headerHTML + `<p class="text-green-400 font-semibold">🎉 ${p.name} finalizou todos os ciclos de gênero!</p>`;
                             }
                         } else {
                             contentHTML = headerHTML + `<p class="text-green-400 font-semibold">🎉 ${p.name} concluiu as indicações para o gênero ${p.currentAssignedGenre}!</p>`;
                         }
                    } else if (!p.currentAssignedGenre && p.assignedGenre && gameState.gameMode === 'infinito') {
                        allParticipantsFinishedAllCycles = false;
                        contentHTML += `<button data-id="${p.id}" class="draw-new-genre-button bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg text-sm w-full mt-2">Sortear Novo Gênero</button>`;
                    } else if (!p.currentAssignedGenre && !p.assignedGenre) {
                         allParticipantsFinishedAllCycles = false;
                         contentHTML += `<p class="text-slate-400">Aguardando sorteio inicial de gênero.</p>`;
                    } else {
                        if(gameState.gameMode === 'tradicional' || (p.genreHistory && p.genreHistory.length >= initialGenres.length && initialGenres.length > 0)) {
                            contentHTML += `<p class="text-green-400 font-semibold">🎉 ${p.name} finalizou sua participação!</p>`;
                        } else {
                            allParticipantsFinishedAllCycles = false;
                            contentHTML += `<p class="text-slate-400">Aguardando próximo passo.</p>`;
                        }
                    }

                    const watchedAnimesInHistory = p.watchedAnimesHistory || [];
                    if (watchedAnimesInHistory.length > 0) {
                        contentHTML += `<h4 class="text-sm font-medium text-slate-400 mt-4 mb-1">Animes já vistos:</h4><ul class="list-disc list-inside text-xs text-slate-500">`;
                        watchedAnimesInHistory.forEach(ind => {
                            const genreContextText = ind.genreContext ? ` <span class="text-slate-400 italic">(Gênero: ${ind.genreContext})</span>` : '';
                            contentHTML += `<li><a href="${ind.animeUrl}" target="_blank" class="hover:underline">${ind.animeTitle}</a> (por ${ind.indicatorName})${genreContextText}</li>`;
                        });
                        contentHTML += `</ul>`;
                    }
                    card.innerHTML = contentHTML;
                    watchLoopContentIndividual.appendChild(card);

                    if (editingAnilistForParticipantId === p.id) {
                        const inputToFocus = document.getElementById(`anilist-edit-${p.id}`);
                        if (inputToFocus) {
                            inputToFocus.focus();
                            inputToFocus.select();
                        }
                    }
                });

                const everyoneTrulyFinishedOriginalModes = gameState.participants.every(p => {
                    if (gameState.gameMode === 'tradicional') {
                        const pendingForCurrentGenre = p.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === p.assignedGenre).length || 0;
                        return !p.animeToWatch && pendingForCurrentGenre === 0 && p.assignedGenre;
                    } else {
                        const isFinishedWithCurrentGenreCycle = !p.animeToWatch && (p.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === p.currentAssignedGenre).length === 0);
                        const hasCompletedAllGenreRotations = p.genreHistory && p.genreHistory.length >= initialGenres.length && initialGenres.length > 0;
                         return isFinishedWithCurrentGenreCycle && (!p.currentAssignedGenre || (hasCompletedAllGenreRotations && p.currentAssignedGenre === null));
                    }
                });
                if(allAnimesWatchedMessage) {
                    allAnimesWatchedMessage.classList.toggle('hidden', !everyoneTrulyFinishedOriginalModes || gameState.participants.length === 0);
                }
            }
        }
        
        document.querySelectorAll('.edit-anilist-user-button').forEach(btn => btn.onclick = e => {
            editingAnilistForParticipantId = e.currentTarget.dataset.id;
            renderApp();
        });
        document.querySelectorAll('.save-anilist-user-button').forEach(btn => btn.onclick = e => handleAnilistUserUpdate(e.currentTarget.dataset.id));
        document.querySelectorAll('.cancel-anilist-user-button').forEach(btn => btn.onclick = () => {
            editingAnilistForParticipantId = null;
            renderApp();
        });
        document.querySelectorAll('.edit-anilist-input').forEach(input => {
            input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleAnilistUserUpdate(input.dataset.id);
                }
            });
        });

        document.querySelectorAll('.mark-as-watched-button').forEach(btn => btn.onclick = e => handleMarkAsWatched(e.currentTarget.dataset.id));
        document.querySelectorAll('.draw-next-anime-button').forEach(btn => btn.onclick = e => handleDrawNextAnimeToWatch(e.currentTarget.dataset.id));
        document.querySelectorAll('.draw-new-genre-button').forEach(btn => btn.onclick = e => drawNewGenreForParticipant(e.currentTarget.dataset.id));
        document.querySelectorAll('.go-to-indicate-for-participant-button').forEach(btn => {
            btn.onclick = (e) => {
                const participantId = e.currentTarget.dataset.id;
                gameState.currentIndicatorTabId = gameState.participants.find(p => p.id !== participantId)?.id || gameState.participants[0]?.id;
                gameState.currentPhase = PHASES.INDICATION;
                renderApp();
            };
        });
    }

    function handleMarkAsWatched(participantId) {
        const participant = gameState.participants.find(p => p.id === participantId);
        if (participant && participant.animeToWatch) {
            if (!participant.watchedAnimesHistory) participant.watchedAnimesHistory = [];
            participant.watchedAnimesHistory.push({
                ...participant.animeToWatch,
                genreContext: participant.currentAssignedGenre
            });

            const indicationInList = participant.receivedIndications.find(ind =>
                ind.animeId === participant.animeToWatch.animeId &&
                ind.indicatorId === participant.animeToWatch.indicatorId &&
                ind.genreContext === participant.currentAssignedGenre
            );
            if (indicationInList) {
                indicationInList.status = 'watched';
            }

            participant.animeToWatch = null;
            showAlert("Anime marcado como visto!", "success");

            if (gameState.gameMode === 'infinito') {
                console.log(`Modo Infinito: ${participant.name} marcou anime como visto. Sorteando novo gênero imediatamente.`);
                drawNewGenreForParticipant(participantId);
            } else {
                renderApp();
            }
        }
    }

    function drawNewGenreForParticipant(participantId) {
        console.log(`[drawNewGenreForParticipant] Iniciando para ${participantId}`);
        const participant = gameState.participants.find(p => p.id === participantId);
        if (!participant) return;

        let availableGenresForNewDraw = [];
        if (initialGenres.length > 0) {
            const completedGenresInCurrentCycle = new Set(participant.genreHistory || []);

            if (completedGenresInCurrentCycle.size >= initialGenres.length) {
                console.log(`[drawNewGenreForParticipant] ${participant.name} completou um ciclo de ${initialGenres.length} gêneros. Reiniciando ciclo de histórico.`);
                participant.genreHistory = [];
                completedGenresInCurrentCycle.clear();
                if (participant.currentAssignedGenre) {
                    completedGenresInCurrentCycle.add(participant.currentAssignedGenre);
                }
            }

            availableGenresForNewDraw = initialGenres.filter(g => !completedGenresInCurrentCycle.has(g.name));

            if (availableGenresForNewDraw.length === 0 && initialGenres.length > 0) {
                console.warn(`[drawNewGenreForParticipant] Nenhum gênero novo disponível após filtro, permitindo repetição do último ou reiniciando se necessário.`);
                 participant.genreHistory = [];
                availableGenresForNewDraw = [...initialGenres];
                 if (participant.currentAssignedGenre && initialGenres.length > 1) {
                    const tempFiltered = initialGenres.filter(g => g.name !== participant.currentAssignedGenre);
                    if (tempFiltered.length > 0) availableGenresForNewDraw = tempFiltered;
                }
            }
        }


        if (availableGenresForNewDraw.length === 0) {
            showAlert(`Todos os gêneros já foram sorteados e completados para ${participant.name}! Ele finalizou o bingo infinito!`, "success", 7000);
            console.log(`[drawNewGenreForParticipant] ${participant.name} FINALIZOU o bingo infinito.`);
            participant.currentAssignedGenre = null;
            renderApp();
            return;
        }

        const chosenNewGenre = availableGenresForNewDraw[Math.floor(Math.random() * availableGenresForNewDraw.length)];
        const newDrawnNumber = chosenNewGenre.numbers[Math.floor(Math.random() * chosenNewGenre.numbers.length)];

        console.log(`[drawNewGenreForParticipant] Novo gênero para ${participant.name}: ${chosenNewGenre.name}`);

        if(!participant.genreHistory) participant.genreHistory = [];
        participant.genreHistory.push(chosenNewGenre.name);
        participant.currentAssignedGenre = chosenNewGenre.name;

        participant.receivedIndications = participant.receivedIndications.filter(ind => ind.status === 'watched');

        showAlert(`Novo gênero sorteado para ${participant.name}: ${chosenNewGenre.name}! Indiquem animes!`, "success", 5000);
        showGenreRevealModal(participant.name, { ...chosenNewGenre, drawnNumber: newDrawnNumber, imageUrl: chosenNewGenre.imageUrl });

        gameState.currentPhase = PHASES.INDICATION;
        const otherParticipants = gameState.participants.filter(p => p.id !== participantId);
        if (otherParticipants.length > 0) {
            gameState.currentIndicatorTabId = otherParticipants[0].id;
        } else if (gameState.participants.length > 0) {
            gameState.currentIndicatorTabId = participantId;
        } else {
            gameState.currentIndicatorTabId = null;
        }

        console.log(`[drawNewGenreForParticipant] Transicionando para fase de INDICAÇÃO.`);
        renderApp();
    }


    function handleDrawNextAnimeToWatch(participantId) {
        const participant = gameState.participants.find(p => p.id === participantId);
        if (!participant || participant.animeToWatch) return;

        const pendingIndications = participant.receivedIndications?.filter(ind => ind.status === 'pending' && ind.genreContext === participant.currentAssignedGenre);

        if (!pendingIndications || pendingIndications.length === 0) {
            showAlert(`Nenhum anime pendente indicado para ${participant.name} no gênero ${participant.currentAssignedGenre}. Peça indicações!`, "info", 4000);
            if (gameState.gameMode === 'infinito'){
                drawNewGenreForParticipant(participantId);
                return;
            }
            renderApp();
            return;
        }
        const randomIndex = Math.floor(Math.random() * pendingIndications.length);
        const chosenIndication = pendingIndications[randomIndex];

        participant.animeToWatch = { ...chosenIndication, statusInternal: 'watching' };
        showAnimeRevealModal(participant.name, participant.animeToWatch);
        renderApp();
    }

    function renderGenreGridFooter() {
        if (!genreGridFooterDiv) { return; }
        genreGridFooterDiv.innerHTML = '';
        initialGenres.forEach(genre => {
            const div = document.createElement('div');
            div.className = 'genre-legend-item bg-slate-700 rounded-lg shadow text-center';

            let overlayHTMLContent = '';
            if (gameState.gameMode === 'infinito' || gameState.gameMode === 'tradicional') {
                const participantsWithThisGenre = gameState.participants?.filter(p => p.currentAssignedGenre === genre.name) || [];
                if (participantsWithThisGenre.length > 0) {
                    div.classList.add('assigned');
                    const names = participantsWithThisGenre.map(p => p.name.split(' ')[0]).join(', ');
                    overlayHTMLContent = `
                        <div class="genre-participant-overlay">
                            <span class="name">${names}</span>
                            <span class="tag">ATIVO</span>
                        </div>`;
                }
            }

            if (gameState.gameMode === 'clube_escolhido' && gameState.currentPhase === PHASES.CLUB_GENRE_SETUP) {
                if (gameState.clubGenre && gameState.clubGenre.name === genre.name) {
                    div.classList.add('selected-for-club');
                }
                div.onclick = () => handleChooseClubGenre(genre.name, genre.imageUrl, genre.numbers ? genre.numbers[0] : undefined);
            } else {
                div.onclick = null;
            }

            div.innerHTML = `
                    <div class="genre-image-wrapper">
                        <img src="${genre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON}" alt="${genre.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG_ERROR_60x90}';">
                    </div>
                    <p class="text-indigo-300 leading-tight">${genre.name}</p>
                    ${overlayHTMLContent}`;
            genreGridFooterDiv.appendChild(div);
        });
    }

    function renderApp() {
        if (!allGamesData.activeGameId || !gameState || Object.keys(gameState).length === 0) {
            gameManagementSection.classList.remove('hidden');
            actualGameContentDiv.classList.add('hidden');
            renderGameManagementScreen();
            return;
        }

        gameManagementSection.classList.add('hidden');
        actualGameContentDiv.classList.remove('hidden');

        let modeDisplayName = "Desconhecido";
        if (gameState.gameMode === 'infinito') modeDisplayName = "Infinito";
        else if (gameState.gameMode === 'tradicional') modeDisplayName = "Tradicional";
        else if (gameState.gameMode === 'clube_sorteado') modeDisplayName = "Clube (Gênero Sorteado)";
        else if (gameState.gameMode === 'clube_escolhido') modeDisplayName = "Clube (Gênero Escolhido)";
        currentGameNameDisplay.textContent = gameState.name ? `Bingo Atual: ${gameState.name} (${modeDisplayName})` : 'Organize seus Bingos de Anime!';


        [registrationPhaseSection, individualDrawPhaseSection, clubGenreSetupPhaseSection, indicationPhaseSection, animeDrawPhaseSection, watchLoopPhaseSection].forEach(sec => sec.classList.add('hidden'));

        if (gameState.currentPhase === PHASES.REGISTRATION) {
            registrationPhaseSection.classList.remove('hidden');
            renderParticipantsList();
        } else if (gameState.currentPhase === PHASES.INDIVIDUAL_DRAW_SELECTION && (gameState.gameMode === 'infinito' || gameState.gameMode === 'tradicional')) {
            individualDrawPhaseSection.classList.remove('hidden');
            renderIndividualDrawSelection();
        } else if (gameState.currentPhase === PHASES.CLUB_GENRE_SETUP && (gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido')) {
            clubGenreSetupPhaseSection.classList.remove('hidden');
            renderClubGenreSetupPhase();
        } else if (gameState.currentPhase === PHASES.INDICATION) {
            indicationPhaseSection.classList.remove('hidden');
            renderIndicationPhase();
        } else if (gameState.currentPhase === PHASES.ANIME_DRAW_SELECTION || gameState.currentPhase === PHASES.CLUB_ANIME_DRAW) {
            animeDrawPhaseSection.classList.remove('hidden');
            renderAnimeDrawPhase();
        } else if (gameState.currentPhase === PHASES.WATCH_LOOP || gameState.currentPhase === PHASES.CLUB_RESULT_DISPLAY) {
            watchLoopPhaseSection.classList.remove('hidden');
            renderWatchLoopPhase();
        }

        resetGameButton.classList.toggle('hidden', !allGamesData.activeGameId || (gameState.currentPhase === PHASES.REGISTRATION && gameState.participants.length === 0) );

        if (allGamesData.activeGameId && gameState.id) {
            userIdDisplay.textContent = `ID do Bingo: ${gameState.id}`;
            footerUserId.textContent = `ID do Bingo: ${gameState.id}`;
        } else {
            userIdDisplay.textContent = '';
            footerUserId.textContent = '';
        }

        if (genreLegendContainer && !genreLegendContainer.classList.contains('hidden')) {
             renderGenreGridFooter();
        }
        saveCurrentGameToAllGames();
    }

    function handleAddParticipant() {
        const name = participantNameInput.value.trim();
        const anilistUsername = participantAnilistUsernameInput.value.trim() || null;

        if (!name) { showAlert("O nome do participante não pode estar vazio.", "error"); return; }

        const maxParticipants = (gameState.gameMode === 'infinito' || gameState.gameMode === 'tradicional') ? initialGenres.length : Infinity;
        if (gameState.participants.length >= maxParticipants && maxParticipants !== Infinity) {
            showAlert(`Máximo de ${maxParticipants} participantes para este modo.`, "error"); return;
        }

        if (gameState.participants.find(p => p.name.toLowerCase() === name.toLowerCase())) { showAlert("Este nome já existe.", "error"); return; }

        gameState.participants.push({
            id: generateUUID(), name,
            anilistUsername: anilistUsername,
            assignedGenre: null, genreDrawNumber: null,
            currentAssignedGenre: null, genreHistory: [],
            animeToWatch: null, receivedIndications: [], watchedAnimesHistory: []
        });
        participantNameInput.value = "";
        participantAnilistUsernameInput.value = "";
        showAlert(`${name} adicionado!`, "success");
        participantNameInput.focus();
        renderApp();
    };

    function handleRemoveParticipant(participantId) {
        const pName = gameState.participants.find(p=>p.id === participantId)?.name;
        gameState.participants = gameState.participants.filter(p => p.id !== participantId);
        gameState.participants.forEach(p => {
            p.receivedIndications = p.receivedIndications.filter(ind => ind.indicatorId !== participantId);
        });
        if (gameState.clubIndications) {
            gameState.clubIndications = gameState.clubIndications.filter(ind => ind.indicatorId !== participantId);
        }

        if (gameState.currentIndicatorTabId === participantId) {
            gameState.currentIndicatorTabId = gameState.participants[0]?.id || null;
        }
        gameState.assignedGenreNames = gameState.assignedGenreNames.filter(ag => ag.participantId !== participantId);
        showAlert(`${pName} removido.`, "success"); renderApp();
    }

    function handleIndividualGenreDraw(participantId) {
        const participant = gameState.participants.find(p => p.id === participantId);
        if (!participant || participant.assignedGenre) return;

        const availableGenres = initialGenres.filter(g => !gameState.assignedGenreNames.some(ag => ag.genreName === g.name));
        if (availableGenres.length === 0) { showAlert("Não há mais gêneros únicos para distribuir inicialmente!", "error"); return; }

        const chosenGenre = availableGenres[Math.floor(Math.random() * availableGenres.length)];
        const drawnNumber = chosenGenre.numbers[Math.floor(Math.random() * chosenGenre.numbers.length)];

        participant.assignedGenre = chosenGenre.name;
        participant.genreDrawNumber = drawnNumber;
        participant.currentAssignedGenre = chosenGenre.name;
        if(!participant.genreHistory) participant.genreHistory = [];
        participant.genreHistory.push(chosenGenre.name);

        gameState.assignedGenreNames.push({participantId: participant.id, genreName: chosenGenre.name});
        showGenreRevealModal(participant.name, { ...chosenGenre, drawnNumber: drawnNumber, imageUrl: chosenGenre.imageUrl });
        renderApp();
    }


    async function handleResetGame() {
        if (await showConfirmAlert('<p class="font-semibold mb-2">Confirmar Reinício do Bingo Atual</p><p>Isso irá manter os participantes, mas limpará todos os gêneros sorteados, animes indicados e progresso de visualização. Deseja prosseguir?</p>')) {
            const currentGameId = allGamesData.activeGameId;
            if (currentGameId && allGamesData.games[currentGameId]) {
                const currentParticipantsData = allGamesData.games[currentGameId].participants.map(p => ({
                    id: p.id,
                    name: p.name,
                    anilistUsername: p.anilistUsername || null,
                    assignedGenre: null,
                    genreDrawNumber: null,
                    currentAssignedGenre: null,
                    genreHistory: [],
                    receivedIndications: [],
                    watchedAnimesHistory: [],
                    animeToWatch: null
                }));

                allGamesData.games[currentGameId] = {
                    ...BASE_GAME_INSTANCE_STATE,
                    id: currentGameId,
                    name: allGamesData.games[currentGameId].name,
                    gameMode: allGamesData.games[currentGameId].gameMode || 'infinito',
                    createdAt: allGamesData.games[currentGameId].createdAt,
                    userId: allGamesData.games[currentGameId].userId || generateUUID(),
                    participants: currentParticipantsData,
                    currentPhase: PHASES.REGISTRATION,
                    assignedGenreNames: [],
                    clubGenre: null,
                    clubAnimeIndication: null,
                    clubIndications: []
                };

                gameState = { ...allGamesData.games[currentGameId] };
                showAlert("Bingo reiniciado! Os participantes foram mantidos.", "success", 4000);
                renderApp();
            } else {
                showAlert("Nenhum bingo ativo para reiniciar.", "error");
            }
        }
    };

    function createNewGame() {
        const gameName = newGameNameInput.value.trim();
        const gameMode = newGameModeSelect.value;
        if (!gameName) { showAlert("Por favor, dê um nome ao novo bingo.", "error"); return; }
        const newGameId = generateUUID();
        const newGame = {
            ...BASE_GAME_INSTANCE_STATE,
            id: newGameId,
            name: gameName,
            gameMode: gameMode,
            createdAt: new Date().toISOString(),
            userId: generateUUID(),
            participants: [],
            assignedGenreNames: [],
            clubGenre: null,
            clubAnimeIndication: null,
            clubIndications: []
        };
        allGamesData.games[newGameId] = newGame;
        allGamesData.activeGameId = newGameId;
        gameState = { ...newGame };
        newGameNameInput.value = '';
        let modeDisplayName = "Desconhecido";
        if (gameMode === 'infinito') modeDisplayName = "Infinito";
        else if (gameMode === 'tradicional') modeDisplayName = "Tradicional";
        else if (gameMode === 'clube_sorteado') modeDisplayName = "Clube (Gênero Sorteado)";
        else if (gameMode === 'clube_escolhido') modeDisplayName = "Clube (Gênero Escolhido)";
        showAlert(`Bingo "${gameName}" (Modo: ${modeDisplayName}) criado e carregado!`, "success");
        saveAllGamesData();
        renderApp();
    }

    function loadSelectedGame(gameId) {
        const gameDataFromStorage = allGamesData.games[gameId];

        if (gameDataFromStorage) {
            allGamesData.activeGameId = gameId;

            gameState = JSON.parse(JSON.stringify(BASE_GAME_INSTANCE_STATE));
            const loadedGameData = JSON.parse(JSON.stringify(gameDataFromStorage));

            for (const key in loadedGameData) {
                if (Object.prototype.hasOwnProperty.call(loadedGameData, key) &&
                    key !== 'participants' &&
                    key !== 'assignedGenreNames' &&
                    key !== 'clubIndications' &&
                    key !== 'clubGenre' &&
                    key !== 'clubAnimeIndication' &&
                    key !== 'animeToWatch') {
                    if (loadedGameData[key] !== undefined) {
                        gameState[key] = loadedGameData[key];
                    }
                }
            }
            gameState.id = loadedGameData.id || gameState.id || generateUUID();
            gameState.name = loadedGameData.name || gameState.name;
            gameState.createdAt = loadedGameData.createdAt || gameState.createdAt || new Date().toISOString();
            gameState.userId = loadedGameData.userId || gameState.userId || generateUUID();
            gameState.gameMode = loadedGameData.gameMode || gameState.gameMode;
            gameState.currentPhase = loadedGameData.currentPhase || gameState.currentPhase;


            gameState.participants = (loadedGameData.participants || []).map(p_in => {
                return {
                    id: p_in.id || generateUUID(),
                    name: p_in.name || "Participante Desconhecido",
                    anilistUsername: p_in.anilistUsername || null,
                    assignedGenre: p_in.assignedGenre || null,
                    genreDrawNumber: p_in.genreDrawNumber || null,
                    currentAssignedGenre: p_in.currentAssignedGenre || p_in.assignedGenre || null,
                    genreHistory: Array.isArray(p_in.genreHistory) ? [...p_in.genreHistory] : [],
                    animeToWatch: p_in.animeToWatch ? { ...p_in.animeToWatch } : null,
                    receivedIndications: Array.isArray(p_in.receivedIndications) ? p_in.receivedIndications.map(ind => ({ ...ind })) : [],
                    watchedAnimesHistory: Array.isArray(p_in.watchedAnimesHistory) ? p_in.watchedAnimesHistory.map(hist => ({ ...hist })) : []
                };
            });

            gameState.assignedGenreNames = Array.isArray(loadedGameData.assignedGenreNames) ? [...loadedGameData.assignedGenreNames] : [];
            gameState.clubGenre = loadedGameData.clubGenre ? { ...loadedGameData.clubGenre } : null;
            gameState.clubAnimeIndication = loadedGameData.clubAnimeIndication ? { ...loadedGameData.clubAnimeIndication } : null;
            gameState.clubIndications = Array.isArray(loadedGameData.clubIndications) ? loadedGameData.clubIndications.map(ind => ({ ...ind })) : [];

            if (gameState.participants.length > 0) {
                const isValidTabId = loadedGameData.currentIndicatorTabId && gameState.participants.find(p => p.id === loadedGameData.currentIndicatorTabId);
                gameState.currentIndicatorTabId = isValidTabId ? loadedGameData.currentIndicatorTabId : gameState.participants[0].id;
            } else {
                gameState.currentIndicatorTabId = null;
            }

            if (!Object.values(PHASES).includes(gameState.currentPhase)) {
                console.warn(`[loadSelectedGame] Fase inválida "${gameState.currentPhase}" carregada para o jogo "${gameState.name}". Redefinindo para REGISTRATION.`);
                gameState.currentPhase = PHASES.REGISTRATION;
            }

            const displayNameForAlert = gameState.name || "Bingo Carregado";
            showAlert(`Bingo "${displayNameForAlert}" carregado!`, "success");

            saveAllGamesData();
            renderApp();
        } else {
            showAlert("Erro ao carregar o bingo: Jogo com ID especificado não encontrado.", "error");
        }
    }


    function deleteGame(gameId) {
        const gameToDelete = allGamesData.games[gameId];
        if (!gameToDelete) return;
        showConfirmAlert(`<p class="font-semibold mb-2">Confirmar Exclusão</p><p>Tem certeza que deseja excluir o bingo "${gameToDelete.name}"? Esta ação não pode ser desfeita.</p>`)
        .then(confirmed => {
            if (confirmed) {
                delete allGamesData.games[gameId];
                if (allGamesData.activeGameId === gameId) {
                    allGamesData.activeGameId = null;
                    gameState = {};
                }
                showAlert(`Bingo "${gameToDelete.name}" excluído.`, "success");
                saveAllGamesData();
                renderApp();
            }
        });
    }

    function renderGameManagementScreen() {
        actualGameContentDiv.classList.add('hidden');
        gameManagementSection.classList.remove('hidden');
        currentGameNameDisplay.textContent = 'Gerenciador de Bingos';
        userIdDisplay.textContent = '';
        footerUserId.textContent = '';
        savedGamesListDiv.innerHTML = '';
        const gameIds = Object.keys(allGamesData.games);
        if (gameIds.length === 0) {
            savedGamesListDiv.innerHTML = '<p class="text-slate-400">Nenhum bingo salvo ainda.</p>';
        } else {
            gameIds.forEach(id => {
                const game = allGamesData.games[id];
                let modeDisplayName = "Desconhecido";
                if (game.gameMode === 'infinito') modeDisplayName = "Infinito";
                else if (game.gameMode === 'tradicional') modeDisplayName = "Tradicional";
                else if (game.gameMode === 'clube_sorteado') modeDisplayName = "Clube (Gênero Sorteado)";
                else if (game.gameMode === 'clube_escolhido') modeDisplayName = "Clube (Gênero Escolhido)";

                const gameItem = document.createElement('div');
                gameItem.className = 'game-list-item';
                gameItem.innerHTML = `
                        <span>${game.name || 'Bingo Sem Nome'} <em class="text-xs text-slate-400 ml-2">(Modo: ${modeDisplayName})</em></span>
                        <div>
                            <button data-game-id="${id}" class="load-game-button bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-1 px-2 rounded mr-2">Carregar</button>
                            <button data-game-id="${id}" class="delete-game-button text-red-400 hover:text-red-300 p-1"><span role="img" aria-label="excluir bingo">🗑️</span></button>
                        </div>
                `;
                savedGamesListDiv.appendChild(gameItem);
            });
            document.querySelectorAll('.load-game-button').forEach(btn => btn.onclick = (e) => loadSelectedGame(e.currentTarget.dataset.gameId));
            document.querySelectorAll('.delete-game-button').forEach(btn => btn.onclick = (e) => deleteGame(e.currentTarget.dataset.gameId));
        }
    }

    async function exportAnimeWatchList() {
         if(exportWatchListButton) exportWatchListButton.disabled = true;
        showAlert("Preparando exportação da lista para assistir...", "info", Infinity);

        try {
            await document.fonts.ready;

            const exportContentDiv = document.createElement('div');
            exportContentDiv.id = 'exportImageContainer';
            exportContentDiv.className = 'export-base-container';
            document.body.appendChild(exportContentDiv);

            let listContentHTML = `<h3 style="font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 700; color: #38bdf8; margin-bottom: 24px; padding-bottom: 12px; text-align: center; line-height: 1.2; letter-spacing: normal; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">Lista de Animes para Assistir - ${gameState.name || 'Bingo'}</h3>`;
            let hasAnimesToWatch = false;

            const imageLoadPromises = [];
            const participantsRenderData = [];

            for (const participant of gameState.participants) {
                if (participant.animeToWatch && participant.animeToWatch.animeTitle) {
                    hasAnimesToWatch = true;
                    const anime = participant.animeToWatch;

                    imageLoadPromises.push(
                        ensureImageIsAccessible(anime.animeImageUrl || PLACEHOLDER_IMG_60x90, PLACEHOLDER_IMG_ERROR_80x120)
                            .then(finalUrl => {
                                const genreDetails = initialGenres.find(g => g.name === participant.currentAssignedGenre);
                                participantsRenderData.push({
                                    name: participant.name,
                                    genreDisplay: genreDetails ? `<span style="font-family: 'Inter', sans-serif; font-size: 16px; color: #cbd5e1; margin-left: 8px; line-height: 1.4; letter-spacing: normal; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">(Gênero Atual: ${genreDetails.name})</span>` : '',
                                    animeTitle: anime.animeTitle,
                                    finalAnimeImageUrl: finalUrl,
                                    indicatorName: anime.indicatorName
                                });
                            })
                    );
                }
            }

            await Promise.all(imageLoadPromises.map(p => p.catch(e => { console.error("Erro no carregamento de imagem (WatchList):", e); return e;})));

            if (!hasAnimesToWatch) {
                listContentHTML += '<p style="font-family: \'Inter\', sans-serif; font-size: 18px; text-align: center; color: #94a3b8; margin-top: 16px; line-height: 1.4; letter-spacing: normal; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">Nenhum anime sorteado para assistir no momento.</p>';
            } else {
                const orderedRenderData = [];
                gameState.participants.forEach(p => {
                    const found = participantsRenderData.find(r => r.name === p.name && p.animeToWatch && r.animeTitle === p.animeToWatch.animeTitle);
                    if (found && found.finalAnimeImageUrl) orderedRenderData.push(found);
                });

                orderedRenderData.forEach(pData => {
                    const titleHTML = `
                        <p style="font-family: 'Inter', sans-serif; font-size: 22px; color: #f1f5f9; font-weight: 500; margin-bottom: 8px; line-height: 1.3;">
                            ${pData.animeTitle}
                        </p>`;

                    listContentHTML += `
                            <div style="padding: 16px 0; border-bottom: 1px solid #334155; margin-bottom: 16px;">
                                <h4 style="font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 600; color: #a5b4fc; margin-bottom: 16px; line-height: 1.3; letter-spacing: normal; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">${pData.name} ${pData.genreDisplay}</h4>
                                <div style="display: flex; align-items: center; gap: 20px; margin-left: 12px; padding-top: 8px;">
                                    <img src="${pData.finalAnimeImageUrl}" alt="Capa do anime ${pData.animeTitle}" style="width: 80px; height: 120px; object-fit: cover; border-radius: 4px; flex-shrink: 0; border: 1px solid #475569; overflow: hidden;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_80x120}'">
                                    <div style="text-align: left; padding-top: 4px; display: flex; flex-direction: column; justify-content: center;">
                                        ${titleHTML}
                                        <p style="font-family: 'Inter', sans-serif; font-size: 18px; color: #cbd5e1; line-height: 1.4; letter-spacing: normal; text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">Indicado por: ${pData.indicatorName}</p>
                                    </div>
                                </div>
                            </div>`;
                });
            }
            exportContentDiv.innerHTML = listContentHTML;

            void exportContentDiv.offsetHeight;
            await new Promise(resolve => setTimeout(resolve, 1000));


            const canvas = await html2canvas(exportContentDiv, {
                backgroundColor: '#0f172a',
                useCORS: true,
                scale: 2,
                logging: true,
                windowWidth: exportContentDiv.scrollWidth,
                windowHeight: exportContentDiv.scrollHeight
            });
            const imageURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imageURL;
            link.download = `lista_animes_assistir_${(gameState.name || 'bingo').replace(/\s+/g, '_')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showAlert("Lista de animes exportada como imagem!", "success");

        } catch (error) {
            console.error("Erro ao exportar imagem da lista para assistir:", error);
            showAlert("Erro ao exportar imagem. Verifique o console.", "error");
        } finally {
            if (document.getElementById('exportImageContainer')) {
                document.body.removeChild(document.getElementById('exportImageContainer'));
            }
            if(exportWatchListButton) exportWatchListButton.disabled = false;
            customAlertDiv.classList.add('hidden');
        }
    }

    async function exportIndicationsList(exportType) {
        const isClubMode = gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido';
        const exportButton = isClubMode ? exportFullIndicationHistoryButton : (exportType === 'current' ? exportIndicationsButton : exportFullIndicationHistoryButton);

        if (exportButton) exportButton.disabled = true;
        showAlert(`Preparando exportação do ${exportType === 'current' && !isClubMode ? 'histórico atual' : 'histórico completo'}...`, "info", Infinity);

        const containerId = 'exportAllIndicationsContainer';
        try {
            await document.fonts.ready;

            let exportContentDiv = document.getElementById(containerId);
            if (exportContentDiv) exportContentDiv.remove();

            exportContentDiv = document.createElement('div');
            exportContentDiv.id = containerId;
            exportContentDiv.className = 'export-base-container';
            document.body.appendChild(exportContentDiv);

            let titleText;
            if (isClubMode) {
                titleText = "Histórico de Indicações para o Clube";
            } else {
                titleText = exportType === 'current' ? "Indicações Atuais para os Gêneros Ativos" : "Histórico Completo de Todas as Indicações";
            }
            let listContentHTML = `<h3 style="font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #38bdf8; text-align: center; margin-bottom: 20px; padding-bottom: 10px; line-height: 1.2;">${titleText} - ${gameState.name || 'Bingo'}</h3>`;
            let hasAnyIndications = false;

            const imageLoadTracker = [];

            if (isClubMode) {
                if (gameState.clubGenre && gameState.clubGenre.name) {
                    imageLoadTracker.push({ type: 'clubGenreIcon', url: gameState.clubGenre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON, alt: gameState.clubGenre.name, data: gameState.clubGenre });
                }
                if (gameState.clubIndications && gameState.clubIndications.length > 0) {
                    gameState.clubIndications.forEach(ind => {
                        imageLoadTracker.push({ type: 'clubAnimeCover', url: ind.animeImageUrl || PLACEHOLDER_IMG_SEARCH_RESULT, alt: ind.animeTitle, data: ind });
                    });
                    hasAnyIndications = true;
                }
            } else {
                gameState.participants.forEach(receiver => {
                    const indicationsToProcess = receiver.receivedIndications || [];
                    indicationsToProcess.forEach(ind => {
                        if (exportType === 'current' && (ind.status !== 'pending' || ind.genreContext !== receiver.currentAssignedGenre)) return;

                        hasAnyIndications = true;
                        const genreDetails = initialGenres.find(g => g.name === ind.genreContext);
                        if (genreDetails && !imageLoadTracker.some(item => item.type === 'genreIcon' && item.data.name === genreDetails.name)) {
                            imageLoadTracker.push({ type: 'genreIcon', url: genreDetails.imageUrl || PLACEHOLDER_IMG_GENRE_ICON, alt: genreDetails.name, data: genreDetails });
                        }
                        imageLoadTracker.push({ type: 'animeCover', url: ind.animeImageUrl || PLACEHOLDER_IMG_SEARCH_RESULT, alt: ind.animeTitle, data: { ...ind, receiverName: receiver.name } });
                    });
                });
            }

            const allImagePromises = imageLoadTracker.map(item =>
                ensureImageIsAccessible(item.url,
                    item.type.endsWith('Icon') ? PLACEHOLDER_IMG_ERROR_20x20 : PLACEHOLDER_IMG_ERROR_40x60)
                .then(finalUrl => ({ ...item, finalUrl }))
                .catch(err => {
                    console.error(`Erro ao carregar imagem para exportar (${item.alt || 'desconhecido'}):`, err);
                    return { ...item, finalUrl: item.type.endsWith('Icon') ? PLACEHOLDER_IMG_ERROR_20x20 : PLACEHOLDER_IMG_ERROR_40x60, errorState: true };
                })
            );
            const resolvedItems = await Promise.all(allImagePromises);

            if (isClubMode) {
                const clubGenreItem = resolvedItems.find(item => item && item.type === 'clubGenreIcon');
                if (clubGenreItem && clubGenreItem.finalUrl) {
                    listContentHTML += `<div style="text-align: center; margin-bottom: 20px; padding-bottom:15px; border-bottom: 1px solid #475569;">
                                        <p style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #a5b4fc; margin-bottom: 8px;">Gênero do Clube:</p>
                                        <img src="${clubGenreItem.finalUrl}" alt="${clubGenreItem.alt}" style="width: 40px; height: 40px; object-fit: contain; margin-right: 8px; display: inline-block; vertical-align: middle; border-radius: 4px;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_20x20}'">
                                        <span style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 500; color: #e2e8f0; vertical-align: middle;">${clubGenreItem.data.name}</span>
                                   </div>`;
                }

                if (!hasAnyIndications) {
                    listContentHTML += `<p style="font-family: 'Inter', sans-serif; font-size: 18px; text-align: center; color: #94a3b8; margin-top: 16px;">Nenhuma indicação feita para o clube ainda.</p>`;
                } else {
                    const indicationsByIndicator = {};
                    resolvedItems.filter(item => item && item.type === 'clubAnimeCover' && item.finalUrl).forEach(item => {
                        const ind = item.data;
                        if (!indicationsByIndicator[ind.indicatorName]) indicationsByIndicator[ind.indicatorName] = [];
                        indicationsByIndicator[ind.indicatorName].push({ ...ind, finalAnimeImageUrl: item.finalUrl });
                    });

                    for (const indicatorName in indicationsByIndicator) {
                        listContentHTML += `<div style="margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px dashed #475569;">
                                                <h4 style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #a5b4fc; margin-bottom: 10px;">${indicatorName} indicou:</h4>
                                                <ul style="list-style: none; padding-left: 0;">`;
                        indicationsByIndicator[indicatorName].forEach(ind => {
                            listContentHTML += `<li style="display: flex; align-items: center; gap: 10px; padding: 6px 0; font-size: 17px; color: #e2e8f0; line-height: 1.4; font-family: 'Inter', sans-serif;">
                                                    <img src="${ind.finalAnimeImageUrl}" alt="Capa de ${ind.animeTitle}" style="width: 45px; height: 67px; object-fit: cover; border-radius: 3px; flex-shrink: 0;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_40x60}'">
                                                    <span style="flex-grow: 1;">${ind.animeTitle}</span>
                                                </li>`;
                        });
                        listContentHTML += `</ul></div>`;
                    }
                }
            } else { // Individual Modes Logic
                const receiversData = {};
                resolvedItems.filter(item => item && item.finalUrl).forEach(item => {
                    if (item.type === 'animeCover') {
                        const indData = item.data;
                        if (!receiversData[indData.receiverName]) receiversData[indData.receiverName] = { name: indData.receiverName, indicationsByGenre: {} };
                        if (!receiversData[indData.receiverName].indicationsByGenre[indData.genreContext]) {
                            const genreDetailsItem = resolvedItems.find(gi => gi && gi.type === 'genreIcon' && gi.data.name === indData.genreContext);
                            receiversData[indData.receiverName].indicationsByGenre[indData.genreContext] = {
                                genreName: indData.genreContext,
                                genreIconUrl: genreDetailsItem ? genreDetailsItem.finalUrl : PLACEHOLDER_IMG_ERROR_20x20,
                                indicators: {}
                            };
                        }
                        if (!receiversData[indData.receiverName].indicationsByGenre[indData.genreContext].indicators[indData.indicatorName]) {
                            receiversData[indData.receiverName].indicationsByGenre[indData.genreContext].indicators[indData.indicatorName] = [];
                        }
                        receiversData[indData.receiverName].indicationsByGenre[indData.genreContext].indicators[indData.indicatorName].push({ ...indData, finalAnimeImageUrl: item.finalUrl });
                    }
                });

                for (const receiverName in receiversData) {
                    const receiver = receiversData[receiverName];
                    listContentHTML += `<div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px dashed #475569;">
                                            <h4 style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 600; color: #a5b4fc; margin-bottom: 12px;">${receiver.name}</h4>`;
                    for (const genreCtx in receiver.indicationsByGenre) {
                        const genreData = receiver.indicationsByGenre[genreCtx];
                        const genreImgHTML = `<img src="${genreData.genreIconUrl}" alt="${genreData.genreName}" style="width: 24px; height: 24px; object-fit: contain; margin-right: 8px; display: inline-block; vertical-align: middle; border-radius: 2px;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_20x20}'">`;
                        listContentHTML += `<div style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #818cf8; margin-top: 12px; margin-bottom: 8px; display: flex; align-items: center;">${genreImgHTML}${genreData.genreName || 'Gênero Desconhecido'}</div>`;

                        for (const indicatorName in genreData.indicators) {
                            listContentHTML += `<div style="margin-left: 16px; margin-bottom: 8px;">
                                                    <p style="font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; color: #94a3b8; margin-bottom: 4px;">Indicado por: ${indicatorName}</p>
                                                    <ul style="list-style: none; padding-left: 0;">`;
                            genreData.indicators[indicatorName].forEach(ind => {
                                let statusTagHTML = '';
                                const participant = gameState.participants.find(p => p.name === receiverName);
                                const isCurrentAnimeToWatch = participant?.animeToWatch && participant.animeToWatch.animeId == ind.animeId && participant.animeToWatch.indicatorId === ind.indicatorId && participant.animeToWatch.genreContext === ind.genreContext;
                                
                                if (exportType === 'history') {
                                    if (isCurrentAnimeToWatch) statusTagHTML = `<span style="font-family: 'Inter', sans-serif; font-size: 20px; margin-left: 10px; line-height: 1; color: #3b82f6; vertical-align: middle;">🎲</span>`;
                                    else if (ind.status === 'watched') statusTagHTML = `<span style="font-family: 'Inter', sans-serif; font-size: 20px; margin-left: 10px; line-height: 1; color: #10b981; vertical-align: middle;">✅</span>`;
                                    else if (ind.status === 'pending' && gameState.gameMode === 'tradicional') statusTagHTML = `<span style="font-family: 'Inter', sans-serif; font-size: 20px; margin-left: 10px; line-height: 1; color: #f59e0b; vertical-align: middle;">⏳</span>`;
                                } else if (exportType === 'current' && ind.status === 'pending' && ind.genreContext === participant?.currentAssignedGenre) {
                                    statusTagHTML = `<span style="font-family: 'Inter', sans-serif; font-size: 20px; margin-left: 10px; line-height: 1; color: #f59e0b; vertical-align: middle;">⏳</span>`;
                                }
                                listContentHTML += `<li style="display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 18px; color: #e2e8f0; line-height: 1.4; font-family: 'Inter', sans-serif;">
                                                        <img src="${ind.finalAnimeImageUrl}" alt="Capa de ${ind.animeTitle}" style="width: 40px; height: 60px; object-fit: cover; border-radius: 2px; flex-shrink: 0;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_40x60}'">
                                                        <span style="flex-grow: 1;">${ind.animeTitle}</span>
                                                        ${statusTagHTML}
                                                    </li>`;
                            });
                            listContentHTML += `</ul></div>`;
                        }
                    }
                    listContentHTML += `</div>`;
                }
            }

            if (!hasAnyIndications) {
                listContentHTML += `<p style="font-family: 'Inter', sans-serif; font-size: 18px; text-align: center; color: #94a3b8; margin-top: 16px;">Nenhuma indicação encontrada para os critérios atuais.</p>`;
            }
            exportContentDiv.innerHTML = listContentHTML;

            void exportContentDiv.offsetHeight;
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(exportContentDiv, {
                backgroundColor: '#0f172a',
                useCORS: true,
                scale: 1.5,
                logging: true,
                windowWidth: exportContentDiv.scrollWidth,
                windowHeight: exportContentDiv.scrollHeight
            });
            const imageURL = canvas.toDataURL('image/png');

            if (!imageURL || imageURL === "data:,") {
                throw new Error("Canvas em branco");
            }

            const link = document.createElement('a');
            link.href = imageURL;
            const filenamePrefix = isClubMode ? 'indicacoes_clube' : (exportType === 'current' ? 'indicacoes_atuais' : 'historico_indicacoes');
            link.download = `${filenamePrefix}_${(gameState.name || 'bingo').replace(/\s+/g, '_')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showAlert("Lista de indicações exportada como imagem!", "success");
        } catch (error) {
            console.error(`Erro ao exportar imagem de indicações:`, error);
            showAlert("Erro ao gerar a imagem de indicações. Verifique o console.", "error");
        } finally {
            if (document.getElementById(containerId)) {
                document.body.removeChild(document.getElementById(containerId));
            }
            if (exportButton) exportButton.disabled = false;
            customAlertDiv.classList.add('hidden');
        }
    }


    async function exportClubResultImage() {
        if (!exportClubResultButton) return;
        exportClubResultButton.disabled = true;
        showAlert("Preparando exportação do resultado do clube...", "info", Infinity);

        const containerId = 'exportClubResultContainer';
        try {
            await document.fonts.ready;

            let exportContentDiv = document.getElementById(containerId);
            if (exportContentDiv) exportContentDiv.remove();

            exportContentDiv = document.createElement('div');
            exportContentDiv.id = containerId;
            exportContentDiv.className = 'export-base-container';
            document.body.appendChild(exportContentDiv);

            let contentHTML = `<h3 style="font-family: 'Inter', sans-serif; font-size: 32px; font-weight: 700; color: #38bdf8; margin-bottom: 24px; padding-bottom: 12px; text-align: center; border-bottom: 1px solid #0ea5e9;">Resultado do Bingo Clube - ${gameState.name || 'Bingo'}</h3>`;

            const imagesToLoad = [];
            if (gameState.clubGenre) {
                imagesToLoad.push(ensureImageIsAccessible(gameState.clubGenre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON, PLACEHOLDER_IMG_ERROR_60x90).then(url => ({ type: 'genre', url, data: gameState.clubGenre })));
            }
            if (gameState.clubAnimeIndication) {
                imagesToLoad.push(ensureImageIsAccessible(gameState.clubAnimeIndication.animeImageUrl || PLACEHOLDER_IMG_150x225, PLACEHOLDER_IMG_ERROR_80x120).then(url => ({ type: 'anime', url, data: gameState.clubAnimeIndication })));
            }

            const resolvedImages = await Promise.all(imagesToLoad.map(p => p.catch(e => { console.error("Erro no carregamento de imagem (ClubResult):", e); return e;})));
            const genreImage = resolvedImages.find(img => img && img.type === 'genre' && img.url);
            const animeImage = resolvedImages.find(img => img && img.type === 'anime' && img.url);

            if (genreImage && genreImage.url) {
                contentHTML += `<div style="margin-bottom: 20px; text-align: center;">
                                    <p style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #a5b4fc; margin-bottom: 8px;">Gênero do Clube:</p>
                                    <img src="${genreImage.url}" alt="${genreImage.data.name}" style="width: 80px; height: 80px; object-fit: contain; border-radius: 8px; margin: 0 auto 8px auto; display: block;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_60x90}'">
                                    <p style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 500; color: #e2e8f0;">${genreImage.data.name}</p>
                               </div>`;
            }

            if (animeImage && animeImage.url) {
                contentHTML += `<div style="margin-top: 20px; padding-top:20px; border-top: 1px dashed #475569; text-align: center;">
                                    <p style="font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 600; color: #67e8f9; margin-bottom: 10px;">Anime Sorteado para o Clube:</p>
                                    <img src="${animeImage.url}" alt="Capa de ${animeImage.data.animeTitle}" style="width: 150px; height: 225px; object-fit: cover; border-radius: 8px; margin: 0 auto 10px auto; display: block; border: 1px solid #475569;" onerror="this.src='${PLACEHOLDER_IMG_ERROR_80x120}'">
                                    <p style="font-family: 'Inter', sans-serif; font-size: 26px; font-weight: 700; color: #5eead4; margin-bottom: 5px; line-height: 1.3; text-align: center;">
                                        ${animeImage.data.animeTitle}
                                    </p>
                                    <p style="font-family: 'Inter', sans-serif; font-size: 16px; color: #cbd5e1;">Indicado por: ${animeImage.data.indicatorName}</p>
                               </div>`;
            }

            exportContentDiv.innerHTML = contentHTML;
            void exportContentDiv.offsetHeight;
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(exportContentDiv, {
                backgroundColor: '#0f172a',
                useCORS: true,
                scale: 2,
                logging: true,
                windowWidth: exportContentDiv.scrollWidth,
                windowHeight: exportContentDiv.scrollHeight
            });
            const imageURL = canvas.toDataURL('image/png');
            if (!imageURL || imageURL === "data:,") {
                throw new Error("Canvas em branco");
            }
            const link = document.createElement('a');
            link.href = imageURL;
            link.download = `resultado_clube_${(gameState.name || 'bingo').replace(/\s+/g, '_')}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showAlert("Resultado do clube exportado como imagem!", "success");

        } catch (error) {
            console.error("Erro ao exportar imagem do resultado do clube:", error);
            showAlert("Erro ao exportar imagem do resultado do clube. Verifique o console.", "error");
        } finally {
            if (document.getElementById(containerId)) {
                document.body.removeChild(document.getElementById(containerId));
            }
            if (exportClubResultButton) exportClubResultButton.disabled = false;
            customAlertDiv.classList.add('hidden');
        }
    }


    // Backup and Restore Functions
    function handleExportAllGamesData() {
        try {
            saveCurrentGameToAllGames();

            const dataStr = JSON.stringify(allGamesData, null, 2);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const date = new Date().toISOString().slice(0, 10);
            a.download = `anime_bingo_dados_${date}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showAlert("Todos os dados dos bingos foram exportados!", "success");
        } catch (error) {
            console.error("Erro ao exportar dados:", error);
            showAlert("Erro ao exportar dados. Verifique o console.", "error");
        }
    }

    async function handleImportGamesData() {
        if (!importFileInput || !importFileInput.files || importFileInput.files.length === 0) {
            showAlert("Nenhum arquivo selecionado para importação.", "info");
            return;
        }

        const file = importFileInput.files[0];
        if (file.type !== "application/json") {
            showAlert("Por favor, selecione um arquivo .json válido.", "error");
            importFileInput.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                loadAllGamesData();

                const importedJson = event.target.result;
                const importedDataContainer = JSON.parse(importedJson);

                if (typeof importedDataContainer !== 'object' || importedDataContainer === null ||
                    typeof importedDataContainer.games !== 'object' || importedDataContainer.games === null ) {
                    showAlert("Arquivo JSON inválido ou formato de dados de jogos incorreto.", "error");
                    importFileInput.value = '';
                    return;
                }

                let importedGamesCount = 0;
                let overwrittenGamesCount = 0;

                for (const gameId in importedDataContainer.games) {
                    if (Object.prototype.hasOwnProperty.call(importedDataContainer.games, gameId)) {
                        const gameFromFile = importedDataContainer.games[gameId];

                        if (typeof gameFromFile !== 'object' || gameFromFile === null ||
                            !gameFromFile.hasOwnProperty('id') || !gameFromFile.hasOwnProperty('name') ||
                            !gameFromFile.hasOwnProperty('currentPhase') || !gameFromFile.hasOwnProperty('participants')) {
                            console.warn(`Jogo com ID ${gameId} no arquivo importado tem formato inválido. Jogo ignorado.`);
                            continue;
                        }
                        
                        const sanitizedGame = {
                            ...BASE_GAME_INSTANCE_STATE,
                            ...JSON.parse(JSON.stringify(gameFromFile)),
                            id: gameFromFile.id || generateUUID(),
                            name: gameFromFile.name || BASE_GAME_INSTANCE_STATE.name,
                            createdAt: gameFromFile.createdAt || new Date().toISOString(),
                            userId: gameFromFile.userId || generateUUID(),
                            gameMode: gameFromFile.gameMode || BASE_GAME_INSTANCE_STATE.gameMode,
                            currentPhase: Object.values(PHASES).includes(gameFromFile.currentPhase) ? gameFromFile.currentPhase : PHASES.REGISTRATION,
                            participants: (gameFromFile.participants || []).map(p_in => {
                                const participantData = {...p_in};
                                return {
                                    id: participantData.id || generateUUID(),
                                    name: participantData.name || "Participante Desconhecido",
                                    anilistUsername: participantData.anilistUsername || null,
                                    assignedGenre: participantData.assignedGenre || null,
                                    genreDrawNumber: participantData.genreDrawNumber || null,
                                    currentAssignedGenre: participantData.currentAssignedGenre || participantData.assignedGenre || null,
                                    genreHistory: Array.isArray(participantData.genreHistory) ? [...participantData.genreHistory] : [],
                                    animeToWatch: participantData.animeToWatch ? { ...participantData.animeToWatch } : null,
                                    receivedIndications: Array.isArray(participantData.receivedIndications) ? participantData.receivedIndications.map(ind => ({ ...ind })) : [],
                                    watchedAnimesHistory: Array.isArray(participantData.watchedAnimesHistory) ? participantData.watchedAnimesHistory.map(hist => ({ ...hist })) : []
                                };
                            }),
                            assignedGenreNames: Array.isArray(gameFromFile.assignedGenreNames) ? [...gameFromFile.assignedGenreNames] : [],
                            clubGenre: gameFromFile.clubGenre ? {...gameFromFile.clubGenre} : null,
                            clubAnimeIndication: gameFromFile.clubAnimeIndication ? {...gameFromFile.clubAnimeIndication} : null,
                            clubIndications: Array.isArray(gameFromFile.clubIndications) ? gameFromFile.clubIndications.map(ind => ({...ind})) : []
                        };
                         if (sanitizedGame.participants.length > 0) {
                            const isValidTabId = gameFromFile.currentIndicatorTabId && sanitizedGame.participants.find(p => p.id === gameFromFile.currentIndicatorTabId);
                            sanitizedGame.currentIndicatorTabId = isValidTabId ? gameFromFile.currentIndicatorTabId : sanitizedGame.participants[0].id;
                        } else {
                            sanitizedGame.currentIndicatorTabId = null;
                        }


                        if (allGamesData.games[sanitizedGame.id]) {
                            overwrittenGamesCount++;
                        } else {
                            importedGamesCount++;
                        }
                        allGamesData.games[sanitizedGame.id] = sanitizedGame;
                    }
                }

                if (importedDataContainer.activeGameId && allGamesData.games[importedDataContainer.activeGameId]) {
                    allGamesData.activeGameId = importedDataContainer.activeGameId;
                } else if (Object.keys(allGamesData.games).length > 0) {
                     allGamesData.activeGameId = null;
                } else {
                    allGamesData.activeGameId = null;
                }
                gameState = {};

                saveAllGamesData();

                let successMessage = "Dados importados com sucesso!";
                if (importedGamesCount > 0) successMessage += ` ${importedGamesCount} novo(s) jogo(s) adicionado(s).`;
                if (overwrittenGamesCount > 0) successMessage += ` ${overwrittenGamesCount} jogo(s) existente(s) atualizado(s).`;
                showAlert(successMessage, "success", 6000);

                importFileInput.value = '';
                renderApp();

            } catch (error) {
                console.error("Erro ao importar dados:", error);
                showAlert(`Erro ao ler ou processar o arquivo: ${error.message}`, "error");
                importFileInput.value = '';
            }
        };

        reader.onerror = () => {
            showAlert("Erro ao ler o arquivo selecionado.", "error");
            importFileInput.value = '';
        };
        reader.readAsText(file);
    }

    // ===== NOVAS FUNÇÕES E LÓGICA PARA O MODO CLUBE =====

    function renderClubGenreSetupPhase() {
        clubGenreDrawModeContent.classList.toggle('hidden', gameState.gameMode !== 'clube_sorteado' || gameState.clubGenre);
        clubGenreChooseModeContent.classList.toggle('hidden', gameState.gameMode !== 'clube_escolhido' || gameState.clubGenre);

        if (gameState.clubGenre) {
            chosenClubGenreDisplay.classList.remove('hidden');
            chosenClubGenreIcon.src = gameState.clubGenre.imageUrl || PLACEHOLDER_IMG_GENRE_ICON;
            chosenClubGenreIcon.alt = gameState.clubGenre.name || 'Ícone do Gênero';
            chosenClubGenreName.textContent = gameState.clubGenre.name;
            goToClubIndicationPhaseButton.classList.remove('hidden');
        } else {
            chosenClubGenreDisplay.classList.add('hidden');
            goToClubIndicationPhaseButton.classList.add('hidden');
        }
        renderGenreGridFooter();
    }

    function handleDrawClubGenre() {
        if (initialGenres.length === 0) {
            showAlert("Nenhum gênero disponível para sorteio.", "error");
            return;
        }
        const randomIndex = Math.floor(Math.random() * initialGenres.length);
        const chosenGenre = initialGenres[randomIndex];
        const drawnNumber = chosenGenre.numbers ? chosenGenre.numbers[Math.floor(Math.random() * chosenGenre.numbers.length)] : null;

        gameState.clubGenre = {
            name: chosenGenre.name,
            imageUrl: chosenGenre.imageUrl,
            drawnNumber: drawnNumber
        };
        gameState.clubIndications = [];
        gameState.clubAnimeIndication = null;

        showGenreRevealModal("o Clube", gameState.clubGenre, true);
        renderApp();
    }

    function handleChooseClubGenre(genreName, genreImageUrl, genreNumber) {
        if (gameState.gameMode !== 'clube_escolhido' || gameState.currentPhase !== PHASES.CLUB_GENRE_SETUP) {
            return;
        }
        gameState.clubGenre = {
            name: genreName,
            imageUrl: genreImageUrl,
            drawnNumber: genreNumber
        };
        gameState.clubIndications = [];
        gameState.clubAnimeIndication = null;

        showAlert(`Gênero "${genreName}" selecionado para o clube!`, "success");
        renderApp();
    }


    // DOM READY E INICIALIZAÇÃO
    document.addEventListener('DOMContentLoaded', () => {
        participantNameInput = document.getElementById('participantNameInput');
        participantAnilistUsernameInput = document.getElementById('participantAnilistUsernameInput');
        addParticipantButton = document.getElementById('addParticipantButton');
        participantsListDiv = document.getElementById('participantsList');
        goToNextPhaseFromRegistrationButton = document.getElementById('goToNextPhaseFromRegistrationButton');
        maxParticipantsWarning = document.getElementById('maxParticipantsWarning');
        registrationPhaseSection = document.getElementById('registrationPhaseSection');
        individualDrawPhaseSection = document.getElementById('individualDrawPhaseSection');
        participantsToDrawListDiv = document.getElementById('participantsToDrawList');
        drawnParticipantsListDiv = document.getElementById('drawnParticipantsList');
        goToIndicationPhaseButton = document.getElementById('goToIndicationPhaseButton');
        indicationPhaseSection = document.getElementById('indicationPhaseSection');
        indicationTabsDiv = document.getElementById('indicationTabs');
        indicationContentDiv = document.getElementById('indicationContent');
        goToAnimeDrawPhaseButton = document.getElementById('goToAnimeDrawPhaseButton');
        animeDrawPhaseSection = document.getElementById('animeDrawPhaseSection');
        participantsToDrawAnimeListDiv = document.getElementById('participantsToDrawAnimeList');
        goToWatchLoopButton = document.getElementById('goToWatchLoopButton');
        watchLoopPhaseSection = document.getElementById('watchLoopPhaseSection');
        watchLoopContentIndividual = document.getElementById('watchLoopContentIndividual');
        allAnimesWatchedMessage = document.getElementById('allAnimesWatchedMessage');
        resetGameButton = document.getElementById('resetGameButton');
        genreGridFooterDiv = document.getElementById('genreGridFooter');
        userIdDisplay = document.getElementById('userIdDisplay');
        footerUserId = document.getElementById('footerUserId');
        customAlertDiv = document.getElementById('customAlert');
        alertIconSpan = document.getElementById('alertIcon');
        alertMessageContentSpan = document.getElementById('alertMessageContent');
        alertCloseButton = document.getElementById('alertCloseButton');
        alertConfirmButtonsDiv = document.getElementById('alertConfirmButtons');
        alertCancelBtn = document.getElementById('alertCancelBtn');
        alertConfirmBtn = document.getElementById('alertConfirmBtn');
        genreRevealModal = document.getElementById('genreRevealModal');
        genreRevealParticipantNameModalTitle = document.getElementById('genreRevealParticipantNameModalTitle');
        genreRevealIconImg = document.getElementById('genreRevealIconImg');
        genreRevealNameText = document.getElementById('genreRevealNameText');
        genreRevealNumberText = document.getElementById('genreRevealNumberText');
        closeGenreRevealModalButton = document.getElementById('closeGenreRevealModalButton');
        animeRevealModal = document.getElementById('animeRevealModal');
        animeRevealParticipantName = document.getElementById('animeRevealParticipantName');
        animeRevealCover = document.getElementById('animeRevealCover');
        animeRevealTitleLink = document.getElementById('animeRevealTitleLink');
        animeRevealIndicator = document.getElementById('animeRevealIndicator');
        animeRevealScore = document.getElementById('animeRevealScore');
        closeAnimeRevealModalButton = document.getElementById('closeAnimeRevealModalButton');
        gameManagementSection = document.getElementById('gameManagementSection');
        newGameNameInput = document.getElementById('newGameNameInput');
        newGameModeSelect = document.getElementById('newGameModeSelect');
        createNewGameButton = document.getElementById('createNewGameButton');
        savedGamesListDiv = document.getElementById('savedGamesList');
        actualGameContentDiv = document.getElementById('actualGameContent');
        currentGameNameDisplay = document.getElementById('currentGameNameDisplay');
        switchGameButton = document.getElementById('switchGameButton');
        searchResultsModal = document.getElementById('searchResultsModal');
        searchResultsListDiv = document.getElementById('searchResultsList');
        closeSearchResultsModalButton = document.getElementById('closeSearchResultsModalButton');
        toggleGenreLegendButton = document.getElementById('toggleGenreLegendButton');
        genreLegendContainer = document.getElementById('genreLegendContainer');
        exportIndicationsButton = document.getElementById('exportIndicationsButton');
        exportFullIndicationHistoryButton = document.getElementById('exportFullIndicationHistoryButton');
        exportWatchListButton = document.getElementById('exportWatchListButton');

        importFileInput = document.getElementById('importFileInput');
        importGamesButton = document.getElementById('importGamesButton');
        exportAllGamesButton = document.getElementById('exportAllGamesButton');

        clubGenreSetupPhaseSection = document.getElementById('clubGenreSetupPhaseSection');
        clubGenreDrawModeContent = document.getElementById('clubGenreDrawModeContent');
        drawClubGenreButton = document.getElementById('drawClubGenreButton');
        clubGenreChooseModeContent = document.getElementById('clubGenreChooseModeContent');
        chosenClubGenreDisplay = document.getElementById('chosenClubGenreDisplay');
        chosenClubGenreIcon = document.getElementById('chosenClubGenreIcon');
        chosenClubGenreName = document.getElementById('chosenClubGenreName');
        goToClubIndicationPhaseButton = document.getElementById('goToClubIndicationPhaseButton');
        indicationPhaseTitle = document.getElementById('indicationPhaseTitle');
        clubGenreForIndicationDisplay = document.getElementById('clubGenreForIndicationDisplay');
        clubGenreForIndicationIcon = document.getElementById('clubGenreForIndicationIcon');
        clubGenreForIndicationName = document.getElementById('clubGenreForIndicationName');
        animeDrawPhaseTitle = document.getElementById('animeDrawPhaseTitle');
        clubGenreForAnimeDrawDisplay = document.getElementById('clubGenreForAnimeDrawDisplay');
        clubGenreForAnimeDrawIcon = document.getElementById('clubGenreForAnimeDrawIcon');
        clubGenreForAnimeDrawName = document.getElementById('clubGenreForAnimeDrawName');
        drawClubAnimeButton = document.getElementById('drawClubAnimeButton');
        watchLoopPhaseTitle = document.getElementById('watchLoopPhaseTitle');
        watchLoopContentIndividual = document.getElementById('watchLoopContentIndividual');
        watchLoopContentClub = document.getElementById('watchLoopContentClub');
        clubResultGenre = document.getElementById('clubResultGenre');
        clubResultGenreIcon = document.getElementById('clubResultGenreIcon');
        clubResultGenreName = document.getElementById('clubResultGenreName');
        clubResultAnime = document.getElementById('clubResultAnime');
        clubResultAnimeCover = document.getElementById('clubResultAnimeCover');
        clubResultAnimeTitleLink = document.getElementById('clubResultAnimeTitleLink');
        clubResultAnimeIndicator = document.getElementById('clubResultAnimeIndicator');
        clubResultParticipants = document.getElementById('clubResultParticipants');
        clubResultParticipantsList = document.getElementById('clubResultParticipantsList');
        exportClubResultButton = document.getElementById('exportClubResultButton');


        if (alertCloseButton) alertCloseButton.onclick = () => { customAlertDiv.classList.add('hidden'); if (currentAlertResolve) { currentAlertResolve(false); currentAlertResolve = null; } };
        if (alertCancelBtn) alertCancelBtn.onclick = () => { customAlertDiv.classList.add('hidden'); if (currentAlertResolve) { currentAlertResolve(false); currentAlertResolve = null; } };
        if (alertConfirmBtn) alertConfirmBtn.onclick = () => { customAlertDiv.classList.add('hidden'); if (currentAlertResolve) { currentAlertResolve(true); currentAlertResolve = null; } };
        if (closeGenreRevealModalButton) closeGenreRevealModalButton.onclick = () => genreRevealModal.classList.add('hidden');
        if (closeAnimeRevealModalButton) closeAnimeRevealModalButton.onclick = () => animeRevealModal.classList.add('hidden');
        if (closeSearchResultsModalButton) closeSearchResultsModalButton.onclick = () => {searchResultsModal.classList.add('hidden'); currentSearchContext = null;};

        if (participantNameInput) {
            participantNameInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') { 
                    event.preventDefault();
                    participantAnilistUsernameInput.focus();
                }
            });
        }

        if (participantAnilistUsernameInput) {
            participantAnilistUsernameInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if(addParticipantButton) addParticipantButton.click();
                }
            });
        }

        if(newGameNameInput) {
            newGameNameInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') { event.preventDefault(); if(createNewGameButton) createNewGameButton.click(); }
            });
        }
        if (toggleGenreLegendButton) {
            toggleGenreLegendButton.onclick = () => {
                genreLegendContainer.classList.toggle('hidden');
                if (!genreLegendContainer.classList.contains('hidden')) {
                    renderGenreGridFooter();
                }
            };
        }
        if(exportWatchListButton) exportWatchListButton.onclick = exportAnimeWatchList;
        if(exportIndicationsButton) exportIndicationsButton.onclick = () => exportIndicationsList('current');
        if(exportFullIndicationHistoryButton) exportFullIndicationHistoryButton.onclick = () => exportIndicationsList('history');
        if(exportClubResultButton) exportClubResultButton.onclick = exportClubResultImage;


        if (addParticipantButton) addParticipantButton.onclick = handleAddParticipant;

        if(goToNextPhaseFromRegistrationButton) goToNextPhaseFromRegistrationButton.onclick = () => {
            if (gameState.gameMode === 'infinito' || gameState.gameMode === 'tradicional') {
                gameState.currentPhase = PHASES.INDIVIDUAL_DRAW_SELECTION;
            } else if (gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido') {
                gameState.currentPhase = PHASES.CLUB_GENRE_SETUP;
            }
            renderApp();
        };
        if(goToIndicationPhaseButton) goToIndicationPhaseButton.onclick = () => {
            gameState.participants.forEach(p => {
                if(!p.receivedIndications) p.receivedIndications = [];
            });
            gameState.currentPhase = PHASES.INDICATION;
            gameState.currentIndicatorTabId = gameState.participants[0]?.id || null;
            renderApp();
        };
        if(goToAnimeDrawPhaseButton) goToAnimeDrawPhaseButton.onclick = () => {
            if (gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido') {
                gameState.currentPhase = PHASES.CLUB_ANIME_DRAW;
            } else {
                gameState.currentPhase = PHASES.ANIME_DRAW_SELECTION;
            }
            renderApp();
        };
        if(goToWatchLoopButton) goToWatchLoopButton.onclick = () => {
            if (gameState.gameMode === 'clube_sorteado' || gameState.gameMode === 'clube_escolhido') {
                gameState.currentPhase = PHASES.CLUB_RESULT_DISPLAY;
            } else {
                gameState.currentPhase = PHASES.WATCH_LOOP;
            }
            renderApp();
        };
        if(resetGameButton) resetGameButton.onclick = handleResetGame;
        if(createNewGameButton) createNewGameButton.onclick = createNewGame;
        if(switchGameButton) switchGameButton.onclick = () => {
            allGamesData.activeGameId = null;
            gameState = {};
            saveAllGamesData();
            renderApp();
        };

        if (importGamesButton) importGamesButton.onclick = handleImportGamesData;
        if (exportAllGamesButton) exportAllGamesButton.onclick = handleExportAllGamesData;

        if(drawClubGenreButton) drawClubGenreButton.onclick = handleDrawClubGenre;
        if(goToClubIndicationPhaseButton) goToClubIndicationPhaseButton.onclick = () => {
            if (!gameState.clubGenre) {
                showAlert("Por favor, defina um gênero para o clube primeiro.", "error");
                return;
            }
            gameState.currentPhase = PHASES.INDICATION;
            gameState.currentIndicatorTabId = gameState.participants[0]?.id || null;
            renderApp();
        };
        if(drawClubAnimeButton) drawClubAnimeButton.onclick = handleDrawClubAnime;


        loadAllGamesData();
        renderApp();
        renderGenreGridFooter();
    });
