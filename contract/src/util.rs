use near_contract_standards::non_fungible_token::{Token, events::NftMint};
use near_sdk::{env, AccountId};

use crate::TimestampMs;

pub fn get_random_number(shift_amount: u32) -> u32 {
    let mut seed = env::random_seed();
    let seed_len = seed.len();
    let mut arr: [u8; 4] = Default::default();
    seed.rotate_left(shift_amount as usize % seed_len);
    arr.copy_from_slice(&seed[..4]);
    u32::from_le_bytes(arr)
}

pub fn current_time_ms() -> TimestampMs {
    env::block_timestamp() / 1_000_000
}

pub fn log_mint(owner_id: &AccountId, tokens: &[Token]) {
    let token_ids = &tokens
        .iter()
        .map(|t| t.token_id.as_str())
        .collect::<Vec<&str>>();
    NftMint {
        owner_id,
        token_ids,
        memo: None,
    }.emit()
}
