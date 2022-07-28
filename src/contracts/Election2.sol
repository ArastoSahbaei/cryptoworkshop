// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Election2 {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidatecount;

    event eventVote(uint256 indexed _candidateid);

    constructor() {
        addCandidate("Blockchain");
        addCandidate("Alice");
        addCandidate("Bob");
        addCandidate("Arasto");
    }

    function addCandidate(string memory _name) private {
        candidatecount++;
        candidates[candidatecount] = Candidate(candidatecount, _name, 0);
    }

    function vote(uint256 _candidateid) public {
        require(_candidateid > 0 && _candidateid <= candidatecount);
        candidates[_candidateid].voteCount++;
        emit eventVote(_candidateid);
    }
}
