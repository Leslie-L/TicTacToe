import { create } from 'zustand'
import { findBestMove } from '../Functions/algorithmTicTacToe'
const useGame = create((set,get) => ({
  playerX: null,
  playerO: null,
  tableGame: [['N','N','N'],['N','N','N'],['N','N','N']],
  playerXwins:0,
  playerOwins:0,
  ties:0,
  turn:'X',
  win:null,
  modal:false,
  isCPU:false,
  isConfigured:false,
  nextGame:()=>{
    set((state) => ({ tableGame:[['N','N','N'],['N','N','N'],['N','N','N']]}))
    set((state) => ({ turn: 'X'}))
    set((state) => ({ modal: false}))
  },
  restart:()=>{
    set((state) => ({ tableGame:[['N','N','N'],['N','N','N'],['N','N','N']]}))
    set((state) => ({ turn: 'X'}))
    set((state) => ({ playerX: null}))
    set((state) => ({ playerO: null}))
    set((state) => ({ playerXwins: 0}))
    set((state) => ({ playerOwins: 0}))
    set((state) => ({ ties: 0}))
    set((state) => ({ win: null}))
    set((state) => ({ modal: false}))
    set((state) => ({ isConfigured: false}))
  },
  configureGame:(p1,p2)=>{
    set((state) => ({ playerX: p1}))
    set((state) => ({ playerO: p2}))
    set((state) => ({ isConfigured: true}))
  },
  winAdd: (winner) =>{ 
        if(winner === 'N'){
            set((state) => ({ ties: state.ties + 1 }))
        }else if(winner==='X'){
            set((state) => ({ playerXwins: state.playerXwins + 1 }))
        }else{
            set((state) => ({ playerOwins: state.playerOwins + 1 }))
        }
        set((state) => ({ modal:true}))
        set((state) => ({ win:winner}))
    },
  changeTurn:()=>{
    if (get().turn=='X') {
        set(() => ({ turn:'O'}))
    }else{
        set(() => ({ turn:'X'})) 
    }
    
  },
    canSelect:(row,col)=>{
        return get().tableGame[row][col]==='N';
    },
    checkWinner: () => {
        get().tableGame.forEach((element) => {
          if (element[0] !== 'N' && element[0] === element[1] && element[1] === element[2]) {
            get().winAdd(element[0]);
            set(() => ({ modal: true }));
            return;
          }
        });
      
        for (let i = 0; i < 3; i++) {
          /*if (
            get().tableGame[i][0] !== 'N' &&
            get().tableGame[i][0] === get().tableGame[i][1] &&
            get().tableGame[i][1] === get().tableGame[i][2]
          ) {
            get().winAdd(get().tableGame[i][0]);
            set(() => ({ modal: true }));
            return;
          }*/
      
          if (
            get().tableGame[0][i] !== 'N' &&
            get().tableGame[0][i] === get().tableGame[1][i] &&
            get().tableGame[1][i] === get().tableGame[2][i]
          ) {
            get().winAdd(get().tableGame[0][i]);
            set(() => ({ modal: true }));
            return;
          }
        }
      
        if (
          get().tableGame[0][0] !== 'N' &&
          get().tableGame[0][0] === get().tableGame[1][1] &&
          get().tableGame[1][1] === get().tableGame[2][2]
        ) {
          get().winAdd(get().tableGame[0][0]);
          set(() => ({ modal: true }));
          return;
        }
      
        if (
          get().tableGame[0][2] !== 'N' &&
          get().tableGame[0][2] === get().tableGame[1][1] &&
          get().tableGame[1][1] === get().tableGame[2][0]
        ) {
          get().winAdd(get().tableGame[0][2]);
          set(() => ({ modal: true }));
          return;
        }
      
        let isTie = true;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (get().tableGame[j][i] === 'N') {
              isTie = false;
              return
            }
          }
        }
      
        if (isTie) {
          get().winAdd('N');
        }
    },
    stateButton:(row,col)=>{
        return get().tableGame[row][col];
    },
    playGame: (row, col) => {
        if (get().canSelect(row, col)) {
          set((state) => {
            const updatedTableGame = [...state.tableGame];
            updatedTableGame[row][col] = state.turn;
            return { tableGame: updatedTableGame };
          });
          get().checkWinner();
          get().changeTurn();
        }
    }
      
}
))


export default useGame;